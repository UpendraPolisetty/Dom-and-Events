//Type One

// let email = document.querySelector('#email');
// let gender = document.querySelector('#gender');
// let terms = document.querySelector('#terms');
// let submit = document.querySelector('.submit');

// let userData = {}

// function handlekeyup (event) {
//     userData.email = event.target.value
// }
// email.addEventListener('keyup',handlekeyup);


// function handlechange (event) {
//     userData.genderStatus = event.target.value
// } 
// gender.addEventListener('change' , handlechange);

// function handleClick ( event ) {
//     userData.termStatus = event.target.checked;
// }
// terms.addEventListener('click',handleClick);

// submit.addEventListener('click', ()=>{
//     console.log(userData);
// });

//Type Two 

let form = document.querySelector('form');

let userData = {}
function handleSubmit ( event ) {
    event.preventDefault();
    userData.email = event.target.elements.email.value;
    userData.gender = event.target.elements.gender.value;
    userData.terms = event.target.elements.terms.checked;
    console.log(userData);
}

form.addEventListener('submit',handleSubmit);