let input = document.querySelector('input[type="text"]');
let rootElm = document.querySelector('.movie-list')
let allMovies = [
    {
        name : "Chatrapati",
        watched : false
    },
    {
        name : "Billa",
        watched : false
    },
    {
        name : "Bahubali",
        watched : false
    },
]
input.addEventListener('keyup',event =>{
    rootElm.innerText = ""
    if(event.keyCode == 13){
        console.log(event.target.value);
        allMovies.push({
            name : event.target.value,
            watched : false
        })
        event.target.value = ""
        createMovieUI();
    }
})

function createMovieUI () {
    rootElm.innerHTML = ""
    allMovies.forEach((movies,i)=>{
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.classList.add("styled-checkbox");
    input.type = "checkbox";
    input.id = i;
    input.checked = movies.watched;
    input.addEventListener('change',handleChange)
    let label = document.createElement('label');
    label.for = i;
    label.innerText = movies.name
    let span = document.createElement('span');
    span.innerText = "x";
    span.setAttribute('data-id',i)
    span.addEventListener('click',deleteMovie)
    li.append(input,label,span);
    rootElm.append(li)
    })
}

function deleteMovie (e) {
    // e.target.parentElement.remove(); this is one way
    let id = e.target.dataset.id;
    allMovies.splice(id,1)
    createMovieUI()
}
function handleChange (e) {
    let id = e.target.id;
    allMovies[id].watched = !allMovies[id].watched
}
