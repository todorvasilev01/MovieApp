// step 1.
// show/hide requested content (login, register, etc...0)


// ACTIONS:
// 0.NAVIGATIONS 
// 1.LOGIN => vizualization login page
// 2.REGISTER => register page




import { displayAddPage } from "./addMovie.js";
import { deleteMovie } from "./delete.js";
import { editPage } from "./edit.js";
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { logout } from "./logout.js";
import { registerPage } from "./register.js";
import { updateNavBar } from "./util.js";

//nav configurations
const routes = {
    "/": homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/logout' : logout,
    '/edit': editPage,
    '/add': displayAddPage,
    '/delete': deleteMovie
}

document.querySelector('nav').addEventListener('click', onNavigate);

function onNavigate(e) {
    if (e.target.tagName === 'A' && e.target.href) {
        e.preventDefault();
    }

    // if(e.target.text === 'Login'){
    //     loginPage();
    // }else if(e.target.text === 'Register'){
    //     registerPage();
    // }else if(e.target.text === 'Movies'){
    //     homePage();
    // }

    const url = new URL(e.target.href);

    const view = routes[url.pathname];

    view();
}

homePage();
updateNavBar();

