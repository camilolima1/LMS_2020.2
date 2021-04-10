let container = document.querySelector(".container");
let button_create_h3 = document.querySelector(".button-create-h3");

button_create_h3.addEventListener("click", function(){
    let h3 = document.createElement("h3");
    container.appendChild(h3);
    let text = document.createTextNode("Outro título");
    h3.appendChild(text);
});