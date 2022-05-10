function loadCommits() {
    let usernameInputElement = document.getElementById('username');
    let username = usernameInputElement.value;
    let repoInputElement = document.getElementById('repo');
    let repo = repoInputElement.value;
    let commitsListElement = document.getElementById('commits');
    let errorStatus = '';

    let endPoint = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(endPoint)
    .then(response=>{
        errorStatus = response.status;
       return response.json()
    })
    .then(data=>{
        data.forEach(e=>{
            let liElement = document.createElement('li');
            let liElementTextContent = `${e.commit.author.name}: ${e.commit.message}`;
            liElement.textContent=liElementTextContent;
            commitsListElement.appendChild(liElement);
        });
    })
    .catch(error=>{
        commitsListElement.innerHTML='';
        let liElement = document.createElement('li');
        liElement.textContent = `Error: ${errorStatus} (Not Found)`;
        commitsListElement.appendChild(liElement);
    })
}