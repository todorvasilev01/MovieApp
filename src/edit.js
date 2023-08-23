import { detailsPage } from "./details.js";
import { showView } from "./util.js";

const section = document.getElementById('edit-movie');

const form = section.querySelector('form');
form.addEventListener('submit', onEditMovie);

export async function editPage(id) {
    console.log('edit', id);
    showView(section);


    let movieTitleInput = section.querySelector('input#title.form-control');
    let movieDescription = section.querySelector('textarea.form-control');
    let imageUrlInput = section.querySelector('input#imageUrl.form-control')

    const res = await fetch(`http://localhost:3030/data/movies/${id}`);
    const movies = await res.json();
    console.log(movies);

    movieTitleInput.value = movies.title;
    movieDescription.value = movies.description;
    imageUrlInput.value = movies.img;



    form.setAttribute('id', id);
}

async function onEditMovie(e) {
    e.preventDefault();

    let formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('img');
    const user = JSON.parse(sessionStorage.getItem('user'));
    
    const movieId = e.target.id;
    console.log(movieId);

    if (title !== '' && description !== '' && img !== '') {
        try {
            const response = await fetch(`http://localhost:3030/data/movies/${movieId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': user.accessToken,
                },
                body: JSON.stringify({ title, description, img }),
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
        } catch (err) {
            alert(err.message);
        }

        detailsPage(movieId);
    }
}


