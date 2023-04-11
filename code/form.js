let form = document.querySelector('form');
let model = document.querySelector('.model_overlay');
let model_data = document.querySelector('.relative')

let data = {}

function handleSubmit(event){
    event.preventDefault();
    data.name = event.target.elements.name.value
    data.mail = event.target.elements.mail.value
    data.interest = event.target.elements.choice.value
    data.color = event.target.elements.color.value
    data.range = event.target.elements.range.value
    data.book = event.target.elements.book.value
    data.terms = event.target.elements.terms.checked
    model.classList.add('open');

  let close = document.querySelector('.model_close'); 
  close.addEventListener('click',() => {
    model.classList.remove('open')
  })
    displayInfo(data)
}

form.addEventListener('submit', handleSubmit);

function displayInfo(data = {}){
  let h1 = document.createElement('h1');
  h1.innerText = `Hi ${data.name} 🥳`
  let p = document.createElement('p')
  p.innerText = data.mail
  let choice = document.createElement('p');
  choice.innerText = `Intrested on ${data.interest}`;
  let color = document.createElement('p');
  color.innerText = `color : ${data.color}`
  let range = document.createElement('p');
  range.innerText = `Rating for movie is ${data.range}`
  let book = document.createElement('p');
  book.innerText = `Book Type : ${data.book}`
  let terms = document.createElement('p');
  terms.innerText = `👉 : ${ data.terms ? "you have accepted terms and conditions" : "You have not accepted terms and conditions"}`

  model_data.append(h1,p,choice,color,range,book,terms)
}
