import { showCreate } from './create.js';
import { showDetails } from './details.js';
import { showView } from './dom.js';
import { e } from './dom.js';

const section = document.getElementById('home-page');
const catalog = section.querySelector('.card-deck.d-flex.justify-content-center');

section.querySelector('#createLink').addEventListener('click',(e)=>{
    e.preventDefault();
    showCreate();
});

catalog.addEventListener('click', (e)=>{
    e.preventDefault();

    let target = e.target;
    if (target.tagName == 'BUTTON') {
        target = target.parentElement;
    }

    if (target.tagName == 'A') {
        const id = target.dataset.id;
        showDetails(id);
    }

});

section.remove();

export function showHome(){
    showView(section);
    getMovies();
}

async function getMovies(){
    catalog.replaceChildren(e('p',{},'Loading...'));
    const res = await fetch('http://localhost:3030/data/movies');
    const data = await res.json();
    catalog.replaceChildren(...data.map(createMovieCard));
}

window.getMovies = getMovies;

function createMovieCard(movie){
    const element = e('div',{className:'card mb-4'});
    element.innerHTML = `
    <div class="card mb-4">
        <img class="card-img-top" src="${movie.img}"
                alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
        </div>
        <div class="card-footer">
            <a data-id="${movie._id} "href="#/details/6lOxMFSMkML09wux6sAF">
                <button type="button" class="btn btn-info">Details</button>
            </a>
        </div>
    </div>`

    return element;
}

