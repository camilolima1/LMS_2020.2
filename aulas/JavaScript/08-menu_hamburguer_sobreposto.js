let button = document.querySelector(".navegador .cabecalho-navegador button");

let menu_retratil = document.querySelector(".navegador .menu-retratil");

button.addEventListener("click", function() {
    menu_retratil.classList.toggle("active");
})