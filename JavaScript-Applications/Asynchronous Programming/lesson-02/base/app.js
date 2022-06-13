window.addEventListener('DOMContentLoaded', start);

async function start() {
    const main = document.querySelector('main');
    const recipes = await getRecipes();
    main.replaceChildren();

    recipes.map(createPreview).forEach(e => main.appendChild(e));
}

function createPreview(recipe) {
    const article = document.createElement('article');
    article.className = 'preview';
    article.innerHTML = `<div class="title">
<h2>${recipe.name}</h2>
</div>
<div class="small">
<img src="${recipe.img}">
</div>`;

    article.addEventListener('click', () => {
        document.querySelector('h2').textContent = 'Loading...';
        togglePreview(recipe._id, article);
    })
    return article;
}

async function togglePreview(id, preview) {
    const recipe = await getSelectedRecipe(id);
    const article = document.createElement('article');
    article.innerHTML = `<h2>${recipe.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src="${recipe.img}">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${recipe.steps.map(s=> `<p>${s}</p>`).join('')}
            </div>`;

            preview.replaceWith(article);
}

async function getRecipes() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';
    const res = await fetch(url);
    const data = await res.json();
    return Object.values(data);
}

async function getSelectedRecipe(recipeId) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/${recipeId}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}