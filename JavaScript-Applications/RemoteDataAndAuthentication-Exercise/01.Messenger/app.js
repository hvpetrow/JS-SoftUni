function attachEvents() {
    document.getElementById('submit').addEventListener('click', onSubmit);
    document.getElementById('refresh').addEventListener('click',loadData)
    loadData();
}

const messagesList = document.querySelector('#messages');
const authorInput = document.querySelector('[name="author"]');
const contentInput = document.querySelector('[name="content"]');


attachEvents();

async function loadData(){
    const url = 'http://localhost:3030/jsonstore/messenger';
    const res = await fetch(url);
    const data = await res.json();

    const messages = Object.values(data);

    messagesList.value = messages.map(m=>`${m.author}: ${m.content}`).join('\n');
}

async function createMessage(message){
    const url = 'http://localhost:3030/jsonstore/messenger';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',           
        },
        body:  JSON.stringify(message)       
    }

    const res = await fetch(url,options);
    const data = await res.json();

    return data;
}

async function onSubmit(){
    const author = authorInput.value;
    const content = contentInput.value;

    const result = await createMessage({author,content});
    contentInput.value = '';

    messagesList.value += '\n' + `${author}: ${content}`;
}

