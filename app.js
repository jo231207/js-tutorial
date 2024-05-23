// const loginInput = loginForm.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
    
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerHTML = `Hello ${username}`;
    greeting.innerText
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    
}
function paintGreetings(){
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings();
}


// function onLoginSubmit(){
//     const value = loginInput.value;
//     if(value === ""){
//         alert("Please write your name.");
//     } else if(value.length > 15){
//         alert("Your name is too long.");
//     }
// }

// loginButton.addEventListener("click", onLoginSubmit);

