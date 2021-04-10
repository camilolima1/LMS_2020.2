let titulo = document.querySelector(".titulo");
titulo.innerHTML = "<span>Meu título foi mudado via JS</span>";

let foto = document.querySelector(".foto");
foto.src = "https://loremflickr.com/500/500/kitten";

titulo.style.color = "red";
titulo.style.backgroundColor = "lightgray";

let span = document.querySelector(".meu-span");
span.classList.add("fundo-azul", "fonte-grande");

span.classList.remove("fundo-azul");
span.classList.toggle("fundo-azul");