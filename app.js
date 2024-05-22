const h1 = document.querySelector("div.hello:first-child h1");
console.log(h1);

h1.addEventListener("click", handleTitleClick);

function handleTitleClick(){
    h1.classList.toggle("clicked");    
}