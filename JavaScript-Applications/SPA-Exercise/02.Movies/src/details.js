import { e, showView } from './dom.js';
import { showEdit } from './edit.js';

const section = document.getElementById('movie-details');
section.remove();

export function showDetails(movieId) {
    showView(section);
    getMovie(movieId);
}

async function getMovie(id) {
    section.replaceChildren('p', {}, 'Loading...');

    const request = [fetch('http://localhost:3030/data/movies/' + id),
    fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`),
    ];

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        request.push(fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`));
    }

    const [movieRes, likesRes, hasLikedRes] = await Promise.all(request);
    const [movieData, likes, hasLiked] = await Promise.all([
        movieRes.json(),
        likesRes.json(),
        hasLikedRes && hasLikedRes.json()
    ]);

    const res = await fetch('http://localhost:3030/data/movies/' + id);
    const data = await res.json();

    section.replaceChildren(createDetails(movieData, likes, hasLiked));
}

function createDetails(movie, likes, hasLiked) {
    const controls = e('div', { className: 'col-md-4 text-center' },
        e('h3', { className: 'my-3' }, 'Movie Desrciption'),
        e('p', {}, movie.description)
    );

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        if (userData.id == movie._ownerId) {
            const deleteBtn = e('a', { className: 'btn btn-danger', href: '#' }, 'Delete');

            const editBtn = e('a', { className: 'btn btn-warning', href: '#' }, 'Edit');
            editBtn.addEventListener('click', async (e) => {
                showEdit();
                e.preventDefault();
                const containerElement = document.getElementById('container');
                const form = containerElement.querySelector('main form');

                form.addEventListener('submit',async (e) => {
                e.preventDefault();

                    const formData = new FormData(form);

                    const movieTitle = formData.get('title').trim();
                    const description = formData.get('description').trim();
                    const imgUrl = formData.get('imageUrl').trim();
                    console.log(userData);

                    const endPoint = `http://localhost:3030/data/movies/${movie._id}`;
                    try {
                        const response = await fetch(endPoint, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-Authorization': userData.token
                            },
                            body: JSON.stringify({ 
                                title: movieTitle,
                                 description,
                                 img: imgUrl
                                 })
                        });

                        if (response.ok != true) {
                            const err = await response.json();
                            throw new Error(err.message);
                        }

                       

                        const editedMovieData = await response.json();
                        console.log(editedMovieData);

                        showDetails(editedMovieData._id);
                    } catch (error) {
                        alert(error.message);
                    }

                    form.reset();
                });
            });


            controls.appendChild(deleteBtn);
            controls.appendChild(editBtn);

        } else {
            if (hasLiked.length != 0) {
                controls.appendChild(e('a', { className: 'btn btn-primary', href: '#' }, 'Unlike'));

            } else {
                controls.appendChild(e('a', { className: 'btn btn-primary', href: '#', onClick: onLike }, 'Like'));

            }
        }
        controls.appendChild(e('span', { className: 'enrolled-span' }, `Liked ${likes}`));

    }

    const element = e('div', { className: 'container' },
        e('div', { className: 'row bg-light text-dark' },
            e('h1', {}, `Movie title: ${movie.title}`),
            e('div', { className: 'col-md-8' },
                e('img', { className: 'img-thumbnail', src: movie.img, alt: 'Movie' })),
            controls
        )
    );
    return element;

    async function onLike() {
        await fetch('http://localhost:3030/data/likes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                movieId: movie._id
            })
        });

        showDetails(movie._id);
    }

    async function onUnlike() {
        const likeId = hasLiked[0]._id;
        await fetch('http://localhost:3030/data/likes/' + likeId, {
            method: 'delete',
            headers: {
                'X-Authorization': userData.token
            },
        });

        showDetails(movie._id);
    }
}