let simbolo1 = Symbol();
let simbolo2 = Symbol("uma string qualquer");

let simbolo3 = Symbol("umSimbolo");
let simbolo4 = Symbol("umSimbolo");

if (simbolo3 === simbolo4) {
    console.log("os simbolos são identicos");
} else {
    console.log("Os simbolos não são identicos pois eles são unicos");
}

let simbolo = Symbol();
let objeto = {
    [simbolo]: "outroSimbolo"
};
console.log(objeto[simbolo]);



let algumArray = [1, "string", false];
for (let umaVariavel of algumArray) {
    console.log(umaVariavel); // imprime: 1, "string", false
}

let listaNumerica = [4, 5, 6];
for (let i in listaNumerica) {
    console.log(i); // "0", "1", "2",
}
for (let i of listaNumerica) {
    console.log(i); // "4", "5", "6"
}

let animais = new Set(["Peixe", "Gato", "Cachorro"]);
for (let indice in animais) {
    console.log(indice); // retorna nada
}
for (let animal of animais) {
    console.log(animal); // "Peixe", "Gato", "Cachorro"
}