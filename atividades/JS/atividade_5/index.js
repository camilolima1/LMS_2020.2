
function abrirFecharMenu() {
    let menu_retratil = document.querySelector(".menu-retratil");
    let container = document.querySelector(".container .conteudo");
    
    menu_retratil.classList.toggle("active");
    container.classList.toggle("active");
}

function abrirModal() {
    document.querySelector('.overlay-modal')
    .classList.add('active');
    desfocarElementos();
}

function fecharModal() {
    document.querySelector('.overlay-modal')
    .classList.remove('active');
    desfocarElementos();
}

window.addEventListener("click", function(event){
    let overlayModal = document.querySelector(".overlay-modal");
    if (event.target == overlayModal) {
        fecharModal();
    }
});

function desfocarElementos() {
    let header = document.querySelector('.nav-header');
    let conteudo = document.querySelector('.conteudo');
    let menu_retratil = document.querySelector(".menu-retratil");

    header.classList.toggle("desfocar");
    conteudo.classList.toggle("desfocar");
    menu_retratil.classList.toggle("desfocar");

}


//Postar mensagem

let posts_data = [
    {
        nome: "Victor",
        mensagem: "tudo bem?",
    },
    {
        nome: "Carlos",
        mensagem: "Tá quente hoje!"
    }
]

function getFeed(){
    posts_data.forEach(post => {
        addFeed(post.nome, post.mensagem);
    });
}

getFeed();

function salvarPost(nome, mensagem){
    posts_data.push({
        nome: `${nome}`,
        mensagem: `${mensagem}`}
    );
}

function limparInputs(){
    document.querySelector(".nome-form").value = "";
    document.querySelector(".mensagem-form").value = "";
}

let nomeForm = document.querySelector(".nome-form");
let mensagemForm = document.querySelector(".mensagem-form");
let submitButton = document.querySelector(".submit-button");


submitButton.addEventListener("click", function(event){

    event.preventDefault();

    let nome = nomeForm.value;
    let mensagem = mensagemForm.value

    //salvar os posts
    salvarPost(nome, mensagem);

    //add ao feed
    addFeed(nome, mensagem);

    //limpar Input
    limparInputs();

    //fechar modal
    fecharModal();
    
});

function addFeed(nome, mensagem) {

    if(nome != "" || mensagem != ""){
        let chatMural = document.querySelector(".chat-mural");
        let card = document.createElement("div");
        
        card.classList.add("card")

        let h3 = document.createElement("h3");
        h3.classList.add("nome-card");
        let text_h3 = document.createTextNode(nome);
        h3.appendChild(text_h3);
        card.appendChild(h3)

        let p = document.createElement("p");
        p.classList.add("mensagem-card");
        let text_p = document.createTextNode(mensagem);
        p.appendChild(text_p);
        card.appendChild(p);

        //adicionar mensagem ao mural
        chatMural.appendChild(card);
    }
    
}

var selecionarPost = setInterval(FeedDestaque, 2000);

function FeedDestaque() {

    let seletor = numeroAleatorio();

    let nomeD = posts_data[seletor].nome;
    let mensagemD = posts_data[seletor].mensagem;

    document.getElementById("nome-card-destaque").innerHTML = nomeD
    document.getElementById("mensagem-card-destaque").innerHTML = mensagemD

}

function numeroAleatorio() {
    if(posts_data.length < 3){
        return Math.floor((Math.random() * 2) + 0);
    }
    else {
        return Math.floor((Math.random() * (posts_data.length)) + 0);
    }
}

