// printar na tela
console.log("Hello World");

// declaração de variáveis
let x = 2;
console.log(x);
let s = "Victor";
console.log(s);

// condicional - if
if(x == 2) {
    console.log("É verdade");
}
else {
    console.log("É mentira");
}

if(s == "Victor") {
    console.log("É verdade");
}
else {
    console.log("É mentira");
}

// listas
let l = [1, 5, 10];

//imprimir um item da lista
console.log(l[0]);
console.log(l[1]);
console.log(l[2]);

// adicionar item a lista
l.push(20);
console.log(l[3]);

// mostrar a lista inteira
console.log(l);

// for
for(let i=0; i<10; i++){
    console.log(i);
}

for(let i=0; i< l.length; i++) {
    console.log(l[i]);
}

// objetos
let pessoa = {
    nome: "Victor",
    sobrenome: "Farias",
    siape: "123456",
};
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.siape);
console.log(pessoa);

// Funções
function add(a, b){
    return a+b;
}
console.log(add(x, 10));

let subtracao = function(a, b){
    let resultado = a-b;
    return resultado;
};
console.log(subtracao(10, 5));

let multiplicar = (a, b) => {
    let resultado = a*b;
    return resultado;
};
console.log(multiplicar(7, 3));

let dividir = (a, b) => (a/b);
console.log(dividir(10, 2));