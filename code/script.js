let firstBox = document.querySelectorAll('.first li');

firstBox.forEach((box,index) =>{
    let h2 = document.createElement('h2');

    box.addEventListener('click',(event)=>{
        event.target.innerText = index +1;
        setTimeout(()=>{
            event.target.innerText = "";
        },5000)
    })
});

let secondBox = document.querySelector('.second');

secondBox.addEventListener('click', (event) => {
    event.target.innerText = event.target.dataset.text
    setTimeout(()=>{
        event.target.innerText = ""
    },5000)
})









