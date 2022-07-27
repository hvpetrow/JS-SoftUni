import { updateNav } from './app.js';
import { showView } from './dom.js';
import { showHome } from './home.js';

const section = document.getElementById('form-sign-up');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

section.remove();

export function showRegister() {
    showView(section);
}

async function onSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repeatPassword = formData.get('repeatPassword').trim();

    if (password !== repeatPassword) {
        alert("Password and Repeat Password don't match !");
        return;
    }

    try {
        const res = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();
        const userData = {
           email: data.email,
           userId: data._id,
           token: data.accessToken
        };

        sessionStorage.setItem('userData',JSON.stringify(userData));

        showHome();
        updateNav();
        form.reset();

    } catch (err) {
        alert(err.message);
    }
}