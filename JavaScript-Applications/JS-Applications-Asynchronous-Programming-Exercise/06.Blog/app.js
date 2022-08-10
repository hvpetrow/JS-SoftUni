function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost)
}

attachEvents();

async function displayPost() {
    const selectedId = document.getElementById('posts').value;
    const h1El = document.getElementById('post-title');
    const postBodyEl = document.getElementById('post-body');
    const commentsEl = document.getElementById('post-comments');
    h1El.textContent = 'Loading...';
    postBodyEl.textContent = '';
    commentsEl.replaceChildren();

    const [post, comments] = await Promise.all([
        getPostById(selectedId),
        getCommentsByPostId(selectedId)
    ]);

    // const post = await (getPostById(selectedId));
    // const comments = await (getCommentsByPostId(selectedId));


    h1El.textContent = post.title;

    postBodyEl.textContent = post.body;


    comments.forEach(c => {
        const liEl = document.createElement('li');
        liEl.textContent = c.text;
        commentsEl.appendChild(liEl);
    });


}
async function getAllPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    const selectedEl = document.getElementById('posts');
    Object.values(data).forEach(p => {
        const optionEl = document.createElement('option');
        optionEl.value = p.id;
        optionEl.textContent = p.title;
        selectedEl.appendChild(optionEl);
    });
}

async function getPostById(postId) {
    const url = `http://localhost:3030/jsonstore/blog/posts/${postId}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
async function getCommentsByPostId(postId) {
    const url = `http://localhost:3030/jsonstore/blog/comments`;
    const res = await fetch(url);
    const data = await res.json();
    let comments = Object.values(data).filter(c => c.postId == postId);
    return comments;
}