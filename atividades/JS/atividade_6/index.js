//--------Parte do Login (MODAL INICIAL)-------------

//Armazenar nome do usuario
const Usuario = {
    usuario_nome: null,
    setUsuario() {
        let usuario = document.querySelector(".login-nome");
        Usuario.usuario_nome = usuario.value;
    },
    getUsuario() {
        return Usuario.usuario_nome;
    }
}

function RealizarLogin() {
    let span_local_login = document.querySelector(".modal-body .aviso");

    if(!inputIsNull(document.querySelector(".login-nome"))){
        //Fecharv modal
        closeModal();
        //Armazenar nome do usuário
        Usuario.setUsuario();
        //Inserir nome do usuario no header
        setarNome();
        //Listar Grupos
        getGruposList();
        //Esconder mensagem de error: nome do usuário vazio
        esconderMensagemError(span_local_login);
        //Limpar input nome do usuário
        limparInput(document.querySelector(".login-nome"));
    }
    else{
        //Mostar mensagem de error: nome do usuário vazio
        mostrarMensagemError(span_local_login);
    }
}

//Inserir nome do usuario no header
function setarNome() {
    let nome_usuario = document.querySelector(".nome-usuario");
    nome_usuario.textContent = Usuario.getUsuario();
}
    
//Fechar modal
function closeModal() {
    let modal = document.querySelector(".overlay");
    modal.classList.add("deactivate");
}


//-----------GRUPO--------------------
const Grupo = {
    idGrupo: null,
    nomeGrupo: "",
    setGrupo(id, nome) {
        Grupo.idGrupo = id;
        Grupo.nomeGrupo = nome;
    },
    getGrupoId() {
        return Grupo.idGrupo; 
    },
    getGrupoNome() {
        return Grupo.nomeGrupo;
    }
}

let card_grupo = document.querySelector(".card-grupo");

function criarCardGrupo(id, nome) {

    let grupo = document.createElement("div");
    grupo.classList.add("grupo");

    let img_grupo = document.createElement("div");
    img_grupo.classList.add("img-grupo");

    let img = document.createElement("img");
    img.src = "./img/person.svg";
    img_grupo.appendChild(img);

    let nome_grupo = document.createElement("h4");
    nome_grupo.classList.add("nome-grupo");
    nome_grupo.textContent = nome;

    grupo.appendChild(img_grupo);
    grupo.appendChild(nome_grupo);
    
    grupo.addEventListener("click", function(){

        //Apagar mensagem error
        let span_local = document.querySelector('.form-nova-mensagem .aviso-grupo');
        esconderMensagemError(span_local);
        // Listar mensagens
        getMensagens(id);
        //Guardar grupo
        Grupo.setGrupo(id, nome);
        //Inserir nome do grupo selecionado
        nomeGrupoSelecionado();

    })

    return grupo;
}

function getGruposList() {
    axios({
        method: "GET",
        url: "https://server-json-lms.herokuapp.com/grupos",
    }).then((response) => {
        card_grupo.innerHTML = "";

        let grupos = response.data;
        for (let grupo of grupos) {
            let card = criarCardGrupo(grupo.id, grupo.nome);
            card_grupo.appendChild(card);
        }
    }).catch((error) => {
        console.log(error);
    })
}

// getGruposList();

// Criar grupo
function postGrupo(event) {
    event.preventDefault();

    let form_novo_grupo_nome = document.querySelector("#form-novo-grupo .nome-novo-grupo");
    let span_local = document.querySelector("#form-novo-grupo .aviso");
    
    if(Usuario.getUsuario() !== null){
        if(!inputIsNull(form_novo_grupo_nome)){
            //esconder mensagem de error: nome do grupo vazio
            esconderMensagemError(span_local);
            axios({
                method: "POST",
                url: "https://server-json-lms.herokuapp.com/grupos",
                data: {
                    nome: form_novo_grupo_nome.value,
                }
            }).then((response) => {
                form_novo_grupo_nome.innerHTML = "";
                //Atualizar lista de grupos
                getGruposList();
                //limpar input
                limparInput(form_novo_grupo_nome);
            }).catch((error) => {
              console.log(error);
            })
        }
        else{
            //mostrar mensagem de error: nome do grupo vazio
            mostrarMensagemError(span_local);
        }
    }
   
}

function nomeGrupoSelecionado(){
    let grupo_selecionado = document.querySelector(".mensagem .grupo-escolhido");
    grupo_selecionado.textContent = Grupo.getGrupoNome();
    grupo_selecionado.classList.add("active");
}


//------------------MENSAGENS---------------------

let container_card = document.querySelector(".container-card");

function criarCardMensagemGrupo(id, nome, corpo, grupoId) {

    let card_mensagem = document.createElement("div");
    card_mensagem.classList.add("card-mensagem");

    let card_titulo = document.createElement("div");
    card_titulo.classList.add("card-titulo");
    card_titulo.textContent = nome;

    let card_texto = document.createElement("div");
    card_texto.classList.add("card-texto");
    card_texto.textContent = corpo;
    
    container_card.appendChild(card_mensagem);
    card_mensagem.appendChild(card_titulo);
    card_mensagem.appendChild(card_texto);

    return card_mensagem;  

}

function getMensagens(id) {
    axios({
        method: "GET",
        url: "https://server-json-lms.herokuapp.com/grupos/"+id+"/mensagens",
    }).then((response) => {
        container_card.innerHTML = "";

        let mensagens = response.data;
        for(let mensagem of mensagens){
            let mensagem_card = criarCardMensagemGrupo(mensagem.id, mensagem.nome, mensagem.corpo, mensagem.grupoId);
            container_card.appendChild(mensagem_card);
        }
    }).catch((error) => {
        console.log(error);
    })
}

function postMensagem(event) {
    event.preventDefault();

    let span_local_grupo = document.querySelector('.form-nova-mensagem .aviso-grupo');
    
    if(Grupo.getGrupoId() !== null) {
        //esconder mensagem de error: grupo não selecionado
        esconderMensagemError(span_local_grupo);

        let span_local_mensagem = document.querySelector('.form-nova-mensagem .aviso');

        let nova_mensagem_form = document.querySelector("#form-mensagem #mensagem-form");
        if(!inputIsNull(nova_mensagem_form)){
            //esconder mensagem de error: input da mensagem vazio
            esconderMensagemError(span_local_mensagem);
            let id_grupo = Grupo.getGrupoId();
            event.preventDefault();
            axios({
                method: "POST",
                url: "https://server-json-lms.herokuapp.com/mensagens",
                data: {
                    nome: Usuario.getUsuario(),
                    corpo: nova_mensagem_form.value,
                    grupoId: id_grupo,
                }
            }).then((response) => {
                getMensagens(id_grupo);
            }).catch((error) => {
                console.log(error);
            })
            //limpar input da mensagem
            limparInput(nova_mensagem_form);
        }
        else{
            //mostrar mensagem de error: input da mensagem vazio
            mostrarMensagemError(span_local_mensagem);
        }
    }
    else{
        //mostrar mensagem de error: grupo não selecionado
        mostrarMensagemError(span_local_grupo);
    }
   
}


//-----funções genericas utilizadas----------

//Verificar se input é vazio
function inputIsNull(input) {
    let input_nome = input;

    if(input_nome.value === ""){
        return true;
    }
    return false;
}

//mostrar mensagem de error
function mostrarMensagemError(span_local) {
    let span_error = span_local;
    span_error.classList.add("active");
}

//esconder mensagem de error
function esconderMensagemError(span_local) {
    let span_error = span_local;
    span_error.classList.remove("active");
}

//limpar input
function limparInput(input){
    input.value = "";
}