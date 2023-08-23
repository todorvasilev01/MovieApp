import { homePage } from "./home.js";
import { showView, updateNavBar } from "./util.js";

const section = document.getElementById('form-sign-up');

const form = section.querySelector('form');
form.addEventListener('submit', onRegister);

export function registerPage() {
    console.log('register page');


    showView(section);
}

async function onRegister(e) {
    e.preventDefault();
    console.log('register');

    const formData = new FormData(form);
    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPassword = formData.get('repeatPassword');

    if (password.length < 6) {
        alert(`Password must be more that 6 character`);
    }

    if (!email) {
        alert('Email fild is required!')
    } else if (!password) {
        alert('Password field is required!')
    } else if (password !== repeatPassword) {
        alert('Password and Repeat must match')
    }

    if (email && password && repeatPassword) {
        await register(email, password);
        form.reset();
        updateNavBar();
        homePage();
    }

   
}


async function register(email, password) {

    try {
        const response = await fetch(`http://localhost:3030/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });

        if(!response.ok){
            const err = new Error(response.statusText);
            throw err;
        }
        const user = await response.json();
        console.log(user);

        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('accessToken', user.accessToken);
        sessionStorage.setItem('loggedUser', user.email);
        sessionStorage.setItem('id', user._id);


    } catch (err) {
        alert(err);
    }
}
// TODO:
// => show/hide HTML content
// => display only movies section (request + ...)