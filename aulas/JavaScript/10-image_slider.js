let seta_esquerda = document.querySelector(".slideshow .seta-esquerda");
let seta_direita = document.querySelector(".slideshow .seta-direita");
let imagens = document.querySelectorAll(".slideshow img");
let indicators = document.querySelectorAll(".indicators .indicator");

let imagem_ativa = 0;

seta_direita.addEventListener("click", function(){
    imagens[imagem_ativa].classList.remove("active");
    indicators[imagem_ativa].classList.remove("active");

    imagem_ativa = imagem_ativa + 1;
    if(imagem_ativa >= imagens.length){
        imagem_ativa = 0;
    }

    indicators[imagem_ativa].classList.add("active");
    imagens[imagem_ativa].classList.add("active");
});

seta_esquerda.addEventListener("click", function(){
    imagens[imagem_ativa].classList.remove("active");
    indicators[imagem_ativa].classList.remove("active");

    imagem_ativa = imagem_ativa - 1;
    if(imagem_ativa < 0){
        imagem_ativa = imagens.length - 1;
    }
    
    indicators[imagem_ativa].classList.add("active");
    imagens[imagem_ativa].classList.add("active");
});