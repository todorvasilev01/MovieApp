//Principles"
//YAGNI - you aren't gonna need it
//KISS - keep it simple

export function showView(section) {
    // Steps: 
    // 1. hide all sections
    // 2. show only 'home-page' section


    document.
        querySelectorAll('.view-section')
        .forEach((s) => {
            s.style.display = 'none';
        })
    section.style.display = 'block';
}

export function updateNavBar() {
    // Steps:
    // if loggedIn User
    // - update welcome msg 
    // - hide login & register
    // - show logout
    // else:
    // - update welcome msg 
    // - show login & register
    // - hide logout

    const user = JSON.parse(sessionStorage.getItem('user'));
    const welcomeMsg = document.getElementById('welcome-msg');

    if (user) {
        // TODO:
        console.log('TODO - show/hide user content');

        document.querySelectorAll('.user').forEach((elem) => {
            elem.style.display = 'inline-block';
        })

        document.querySelectorAll('.guest').forEach((elem) => {
            elem.style.display = 'none';
        })

        welcomeMsg.textContent = `Welcome ${user.email}`
       
    } else {
        document.querySelectorAll('.user').forEach((elem) => {
            elem.style.display = 'none';
        })

        document.querySelectorAll('.guest').forEach((elem) => {
            elem.style.display = 'inline-block';
        })

        welcomeMsg.textContent = '';

    }
}

