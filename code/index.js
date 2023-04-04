let btn1 = document.querySelector('.first');
let btn2 = document.querySelector('.second');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2')

function getRandomColorId () {
    let hexCharacters = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color = '#';
    for(let i=0; i<6 ; i++) {
        let randomNumber = Math.floor(Math.random()*16)
        color = color + hexCharacters[randomNumber];
    }
    return color;
}
function handleClick(){
    box1.style.backgroundColor = getRandomColorId()
}
function handleMouseMove(){
    box2.style.backgroundColor = getRandomColorId()
}

btn1.addEventListener('click',handleClick);
btn2.addEventListener('mousemove',handleMouseMove)