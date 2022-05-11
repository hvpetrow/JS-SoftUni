
async function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const response = await fetch(url);
    const data = await response.json();
    const mainElement = document.getElementById('main');
    mainElement.innerHTML = '';

    for (const key of data) {
        let endPointDetails = `http://localhost:3030/jsonstore/advanced/articles/details/${key._id}`;
        const responseDetails = await fetch(endPointDetails);
        const dataDetails = await responseDetails.json();

        let structure = `<div class="accordion">
                            <div class="head">
                                <span>${dataDetails.title}</span>
                                <button class="button" id="${dataDetails._id}">More</button>
                            </div>
                            <div class="extra">
                                <p>${dataDetails.content}</p>
                            </div>
                        </div>`;

        mainElement.innerHTML += structure + '\n';
        const button = document.getElementById(dataDetails._id);
        mainElement.addEventListener('click', toggle);
    }

    function toggle(e) {
        if (e.target.nodeName==='BUTTON') {
            if (e.target.textContent === 'More') {
                e.target.textContent='Less';        
                e.target.parentNode.parentNode.querySelector('.extra').style.display = 'block';  
                
            }else{
                e.target.textContent= 'More'; 
                e.target.parentNode.parentNode.querySelector('.extra').style.display = 'none';
            }      
        }
    }
}   

solution()