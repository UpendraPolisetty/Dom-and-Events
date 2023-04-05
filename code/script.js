let userData = document.querySelector('.user-icons');
let computerData = document.querySelector('.computer-icons');
let result = document.querySelector('.result');
let reset = document.querySelector('button');


let dataSet = [
    {
        name : "rock",
        beats : "scissors"
    },
    {
        name : "paper",
        beats : "rock"
    },
    {
        name : "scissors",
        beats : "paper"
    }
];

function getResult(user , computer){
    if(user.name == computer.name){
        result.innerText = "😐😐 Its a tie 😐😐"
    }else if(user.beats == computer.name){
        result.innerText = "🥳🥳🎉🎉 YOU WIN 🥳🥳🎉🎉 "
    } else {
        result.innerText = "😒😒 YOU LOSE 😒😒"
    }
}
let userSelected ={}, computerSelected ={};
function generaterandomNum () {
    return Math.floor(Math.random()*3)
}

function createUserLayout () {
    userData.innerText = "";
    dataSet.forEach(icons => {
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.className = `fa fa-hand-${icons.name}-o`
        if(userSelected.name == icons.name){
            li.classList.add("selected")
        }
        li.append(i);
        userData.append(li)

        li.addEventListener('click',()=>{
            userSelected = icons;
            computerSelected = dataSet[generaterandomNum()]
            reRender();
            getResult(userSelected,computerSelected)
        })
    })
}
createUserLayout();

function createComputerLayout () {
    computerData.innerText = "";
    dataSet.forEach(icons => {
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.className = `fa fa-hand-${icons.name}-o`
        if(computerSelected.name == icons.name){
            li.classList.add("selected")
        }
        li.append(i);
        computerData.append(li);
    })
}
createComputerLayout();

function reRender (){
    createUserLayout();
    createComputerLayout();
}

reset.addEventListener('click',()=>{
    userSelected = {};
    computerSelected = {};
    reRender();
})