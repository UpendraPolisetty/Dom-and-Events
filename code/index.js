// Counter 
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let reset = document.querySelector('.reset')
let counter = document.querySelector('.num');
 


inc.addEventListener('click',function(){
    counter.innerText = Number(counter.innerText) +1 ;
})
dec.addEventListener('click',function(){
    counter.innerText = Number(counter.innerText) -1;
});

reset.addEventListener('click',function() {
    counter.innerText=0;
})



// practice events

// btn.onclick = function () {
//     console.log('you clicked me ')
// }
// btn.onmousemove = () => console.log("mouse came up on me!");
// btn.ondblclick = () => console.log("you beated me two times!!")
//  btn.addEventListener('click', ()=>console.log('Hii darling'))
// btn.addEventListener('dblclick',()=> console.log('hii am double click event '))
// btn.addEventListener('mouseover',()=>console.log('your name'))