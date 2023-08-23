

export async function deleteMovie(id){
    let url = `http://localhost:3030/data/movies/${id}`;
    

    const response = await fetch(url,{
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization' : user.accessToken
        },

    });

    const data = await response.json();

}