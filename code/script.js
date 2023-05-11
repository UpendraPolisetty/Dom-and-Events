let form = document.querySelector('form');

let userinfo = {}
let errorMessage = {}

function displayError(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessage[name]
    elm.classList.remove('success')
    elm.classList.add('error')
}
function displaySuccess(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = ""
    elm.classList.remove('error')
    elm.classList.add('success')
}
let handleSubmit = e => {
    e.preventDefault();
    let elements = e.target.elements;
    const name = elements.name.value;
    const username = elements.username.value;
    const email = elements.email.value;
    const phonenumber = elements.phoneNumber.value;
    const password = elements.password.value;
    const confirmPassword = elements.confirmPassword.value;
     let data = [];
        // Username can't be less than 4 characters
        if(username.length < 4){
            errorMessage.username = "Username can't be less than 4 characters";
            displayError("username")
        }else{
            displaySuccess('username')
            data.push(username)
        }
        // Name can't be numbers
        if(!isNaN(name)){
            errorMessage.name = " Name can't be numbers";
            displayError('name');
        }else{
            displaySuccess('name')
            data.push(name)
        }
        // Email must contain the symbol @
        if(!email.includes("@")){
            errorMessage.email = "Email must contain the symbol @"
         
         // Email must be at least 6 characters 
        }else if(email.length < 6){
            errorMessage.email = "Email must be at least 6 characters"
            displayError("email")
        }else{
            displaySuccess('email')
            data.push(email)
        }
        // Phone numbers can only be a number
        if(isNaN(phonenumber)){
            errorMessage.phoneNumber = "Phone numbers can only be a number";
            displayError("phoneNumber")
            // Length of phone number can't be less than 7
        }else if(phonenumber.length < 7){
            errorMessage.phoneNumber = "Length of phone number can't be less than 7"
            displayError("phoneNumber")
        }else{
            displaySuccess("phoneNumber")
            data.push(phonenumber)
        }
        
        // Password and confirm password must be same.
        if(password != confirmPassword) {
            errorMessage.confirmPassword = "Password and confirm password must be same."
            displayError("confirmPassword");
        }else {
            displaySuccess("password");
            displaySuccess("confirmPassword")
            data.push(password,confirmPassword)
        }
        console.log(data)
    }

form.addEventListener('submit',handleSubmit)