// [] improve HTML structure
// [] create app.js module
// [] create util.js containing hide and display of view
// [] placeholders for all views

import { showHome } from './home.js';
import { showDetails } from './details.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';
// import { showCreate } from './create.js';
import { showEdit } from './edit.js';

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister
};

const nav = document.querySelector('nav');

document.getElementById('logoutBtn').addEventListener('click', onLogout);
nav.addEventListener('click',(event) => {   
    if (event.target.tagName == 'A') {
        event.preventDefault();
        const view = views[event.target.id];
        view();
    }
});

updateNav();
showHome();

export function updateNav(){
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData!=null) {
        nav.querySelector('#welcomeMsg').textContent =  `Welcome ${userData.email}`;
        [...document.querySelectorAll('.user')].forEach(e => e.style.display = 'block');
        [...document.querySelectorAll('.guest')].forEach(e => e.style.display = 'none');
    }else{
        [...document.querySelectorAll('.user')].forEach(e => e.style.display = 'none');
        [...document.querySelectorAll('.guest')].forEach(e => e.style.display = 'block');
    }
}

async function onLogout(event){
    event.preventDefault();
    event.stopImmediatePropagation();

    const {token}  = JSON.parse(sessionStorage.getItem('userData'));

    await fetch('http://localhost:3030/users/logout',{
        headers:{
        'X-Authorization' : token
        }
    });

sessionStorage.removeItem('userData');
updateNav();
showLogin();
}

// implement views
// - create request logic
// - DOM manipulation logic
// [] catalog
// [] login
// [ ] register
// [ ] create
// [ ] details
// [ ] like
// [ ] edit
// [ ] delete
