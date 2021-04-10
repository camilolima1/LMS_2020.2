let div_p = document.getElementById("div-principal");
console.log(div_p);

let divs = document.getElementsByTagName("div");
console.log(divs);
console.log(divs[0]);
console.log(divs[1]);

for(let i=0; i < divs.length; i++){
    console.log(divs[i]);
}

let divs_classe = document.getElementsByClassName("classe-da-div");
console.log(divs_classe);

let divs_classe1 = document.querySelectorAll(".classe-da-div");
console.log(divs_classe1);

let div_dentro = document.querySelector(".classe-da-div .div-interior");
console.log(div_dentro);