import { showView } from "./util.js";


const section = document.getElementById('add-movie');

const addMovieSection = document.getElementById('add-movie-button');
const addButton = addMovieSection.querySelector('a');

addButton.addEventListener('click', displayAddPage);




export function displayAddPage() {
    console.log('add');
    showView(section);

    const form = section.querySelector('form');
    form.addEventListener('submit', onAddMovie);

    async function onAddMovie(e) {
        e.preventDefault();
        const url = `http://localhost:3030/data/movies`;
        const formData = new FormData(form);

        let title = formData.get('title');
        let description = formData.get('description');
        let img = formData.get('img');
        const user = JSON.parse(sessionStorage.getItem('user'));

        let settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization' :  user.accessToken,
            },
            body: JSON.stringify({
                title,
                description,
                img
            })

        }
        let response = await fetch(url, settings);
        let result = await response.json();

    }

}

