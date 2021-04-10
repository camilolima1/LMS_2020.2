let nome_form = document.querySelector(".nome-form");
let mensagem_form = document.querySelector(".mensagem-form");
let submitButton = document.querySelector(".submit-button");

let mural = document.querySelector(".mural");

submitButton.addEventListener("click", function(){
    event.preventDefault();
    let nome = nome_form.value;
    let mensagem = mensagem_form.value;

    let card = document.createElement("div");
    card.classList.add("card");
    mural.appendChild(card);

    let h3 = document.createElement("h3");
    h3.classList.add("nome-card");
    let text_h3 = document.createTextNode(nome);
    h3.appendChild(text_h3);
    card.appendChild(h3);

    let mensagem_p = document.createElement("p");
    mensagem_p.classList.add("mensagem-card");
    let text_mensagem = document.createTextNode(mensagem);
    mensagem_p.appendChild(text_mensagem);
    card.appendChild(mensagem_p);

})
