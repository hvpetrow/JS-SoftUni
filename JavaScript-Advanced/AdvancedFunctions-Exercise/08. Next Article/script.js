function getArticleGenerator(articles) {
    let input = articles;

    return () =>{
        if (input.length>0) {
            let article = document.createElement('article');
            let div = document.querySelector('#content');

            article.innerText = input.shift();
            
            div.appendChild(article);
        }
    }
}
