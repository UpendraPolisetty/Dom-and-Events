let output = document.querySelector('.output');

let initialNumber = 0
output.innerText = initialNumber;

let allButtons = document.querySelectorAll('button');

allButtons.forEach(btn => {
    btn.addEventListener('click',event => {
        if (output.innerText == initialNumber){
            output.innerText = event.target.innerText
        }else {
            output.innerText =output.innerText + event.target.innerText
        }
        if (event.target.classList.contains("clear")){
            output.innerText = initialNumber;
        }
        if(event.target.classList.contains("equal")){
            output.innerText = eval(output.innerText)
            return;
        }

    })
})