let parentBox = document.querySelector('.boxes');

function getRandomColour () {
 let hexCharacters = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

let color = '#';

for(let i=0 ; i<6; i++){
    let randomNumber = Math.floor(Math.random()*16)
    color = color + hexCharacters[randomNumber];
}
return color ;
}

function getRandomNumber () {
    return Math.floor(Math.random()*500)
}

for ( let i=0; i<500; i++) {
    let div = document.createElement('div');
    div.classList.add("box")
    let h3 = document.createElement('h3');
    h3.innerText = getRandomNumber();
    div.append(h3)
    parentBox.append(div)
    function handleChange () {
        div.style.backgroundColor = getRandomColour();
    }
    function handleNumber () {
        h3.innerText = getRandomNumber();
    }
    parentBox.addEventListener('mousemove',handleChange)
    parentBox.addEventListener('mousemove',handleNumber)
}



