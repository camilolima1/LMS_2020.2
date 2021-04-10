let openModal = document.querySelector(".open-modal");
console.log(openModal)
let overlayModal = document.querySelector(".overlay-modal");

openModal.addEventListener("click", function(){
    overlayModal.classList.add("active");
});

let buttonClose = document.querySelector(".modal-container .modal-footer .button-close");
let modalClose = document.querySelector(".modal-container .modal-header .modal-close");

buttonClose.addEventListener("click", function(){
    overlayModal.classList.remove("active");
});

modalClose.addEventListener("click", function(){
    overlayModal.classList.remove("active");
});

window.addEventListener("click", function(event){
    if(event.target == overlayModal){
        overlayModal.classList.remove("active")
    }
});