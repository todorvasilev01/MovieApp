import { deleteMovie } from "./delete.js";
import { editPage } from "./edit.js";
import { showView } from "./util.js";

const section = document.getElementById('movie-example');

export async function detailsPage(id) {
    console.log('----details----', id);
    // TODO:
    // => show/hide HTML content
    // => display only movies section (request + ...)
    // display movies

    showView(section);
    const movie = await getMovie(id);

    // TODO: removing loadind indicator


    section.replaceChildren(createMovieCard(movie));

}

function createMovieCard(movie) {
    const elem = document.createElement('div');
    elem.className = 'container';
    elem.innerHTML = `
   <div class="row bg-light text-dark">
   <h1>Movie title: ${movie.title}</h1>

   <div class="col-md-8">
     <img
       class="img-thumbnail"
       src="${movie.img}"
       alt="Movie"
     />
   </div>
   <div class="col-md-4 text-center">
     <h3 class="my-3">Movie Description</h3>
     <p>${movie.description}</p>
     <a class="btn btn-danger" id=${movie._id} href="/delete">Delete</a>;
     <a class="btn btn-warning" id=${movie._id} href="/edit">Edit</a>;
     <a class="btn btn-primary">Like</a>`;

    return elem;
}

async function getMovie(id) {
    const res = await fetch(`http://localhost:3030/data/movies/${id}`);
    const movie = await res.json();

    return movie;
}

section.addEventListener('click', onEdit);

function onEdit(e) {
    e.preventDefault();

    const currentMovieId = e.target.id;
    const user = sessionStorage.user;



    if (e.target.tagName === 'A' && e.target.textContent === 'Edit') {
        console.log('edit');

        editPage(currentMovieId);

    }
}

section.addEventListener('click', onDelete);

function onDelete(e){
    e.preventDefault();
    const currentMovieId = e.target.id;
    const user = sessionStorage.user;

    if (e.target.tagName === 'A' && e.target.textContent === 'Delete') {
        console.log('delete');
        deleteMovie(currentMovieId);
    }


}