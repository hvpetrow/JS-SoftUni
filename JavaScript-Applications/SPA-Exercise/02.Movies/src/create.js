import { saddlebrown } from 'color-name';
import { showView } from './dom.js';
import { showHome } from './home.js';

const section = document.getElementById('add-movie');
const form = section.querySelector('form');
form.addEventListener('submit',onCreate);

section.remove();

export function showCreate(){
    showView(section);
    
}

async function onCreate(e){
    e.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const imageUrl = formData.get('imageUrl').trim();

   const userData = sessionStorage.getItem('userData');
    console.log(userData);
    if (!userData) {
        alert('You must be logged on to add a movie !');
        return;
    }

    try {
        const res = await fetch('http://localhost:3030/data/movies',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                title,
                description,
                img: imageUrl
            })
        });
    


        if (res.ok!=true) {
            const error = await res.json();
            throw new Error(error.message);
        }
        
        const data = res.json();
        console.log(data);
        showHome();
        form.reset();
        
    } catch (error) {
        alert(error.message);
    }
   

   
}
