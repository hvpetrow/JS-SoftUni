 async function loadRepos() {
	let usernameElement = document.getElementById('username');
	let username = usernameElement.value;
	let ulElement = document.getElementById('repos');

	const endPoint = `https://api.github.com/users/${username}/repos`;

	fetch(endPoint)
		.then(response => {
			if (response.ok) {
				return response.json()
			}

			throw new Error(`${response.status} (Not Found)`)
		})
		.then(data => {
			ulElement.innerHTML = '';
			data.forEach(repo => {
				let repoName = repo.full_name;
				let htmlUrl = repo.html_url;
				let liElement = document.createElement('li');

				let hyperLinkElement = document.createElement('a');
				hyperLinkElement.href = `${htmlUrl}`;
				hyperLinkElement.textContent = repoName;

				ulElement.appendChild(liElement);
				liElement.appendChild(hyperLinkElement);
			});
		})
		.catch(err => {
			ulElement.innerHTML = '';
			let liElement = document.createElement('li');
			liElement.textContent= err;
			ulElement.appendChild(liElement);	
		});
}


// const inputField = document.getElementById('username');
// 	const username = inputField.value;

// 	const ulRepos = document.getElementById('repos');
// 	ulRepos.innerHTML = '';

// 	const endpoint = `https://api.github.com/users/${username}/repos`;

// 	let errorHandle = '';

// 	try {
// 		const response = await fetch(endpoint);
// 		errorHandle = `Status code: ${response.status} ${response.statusText}`;
// 		const reposData = await response.json();

// 		reposData.forEach(repo=>{
// 			const fullName = repo.full_name;
// 			const url = repo.html_url;
	
// 			const liElement = document.createElement('li');
// 			ulRepos.appendChild(liElement);
	
// 			const aHyperLinkRepo = document.createElement('a');
// 			aHyperLinkRepo.href = `${url}`;
// 			aHyperLinkRepo.textContent = `${fullName}`;
// 			liElement.appendChild(aHyperLinkRepo);
// 		});
// 	} catch (error) {	
// 		const liElement = document.createElement('li');
// 		ulRepos.appendChild(liElement);
// 		liElement.textContent = errorHandle;
// 	}
// }
