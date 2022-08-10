import {html, render} from 'https://unpkg.com/lit-html?module';

const articleTemplate = (data) => html`
<article>
<h3>${data.title}</h3>
<div class="${data.color}">
    <p>${data.content}
    </p>
</div>
<footer>Author: ${data.author}</footer>
<div class="comments">
<p>Some comments</p>
</div>
</article>`;

start();

async function start() {
  const data = await (await fetch("./data.json")).json();
  const main = document.querySelector("main");
  const renderBtn = document.getElementById('renderBtn').addEventListener('click', onRender);

function onRender() {
const result = data.map(articleTemplate);
render(result, main);
}
}


