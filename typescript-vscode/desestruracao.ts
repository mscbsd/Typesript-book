let lista = [1, 2];
let [um, dois] = lista;
console.log(um); // imprime o valor 1
console.log(dois); // imprime o valor 2

let primeiro = lista[0];
let segundo = lista[1];

console.log(primeiro);// imprime o valor 1
console.log(segundo);// imprime o valor 2

function funcaoLista([primeiro, segundo]: [number, number]) {
    console.log(primeiro);
    console.log(segundo);
}

funcaoLista(lista); // imprime 1 e 2 

let [primeiro, ...outros] = [1, 2, 3, 4];
console.log(primeiro);// imprime o valor 1
console.log(outros);// imprime os valores [2,3,4]

let [primeiro] = [1, 2, 3, 4];
console.log(primeiro); // imprime o valor 1

let [, segundo, , quarto] = [1, 2, 3, 4];
console.log(quarto);// imprime o valor 4

let obj = {
    a: "foo",
    b: 33,
    c: "bar"
}
let {a, b} = obj;

let { a, b } = { a: "teste", b:99 };

let {a: novoNomeA, b: novoNomeB} = obj;

let novoNomeA = obj.a;
let novoNomeB = obj.b;

let {a, b}: { a: string, b: number } = obj;

function tenhoAlgumObjeto(algumObjeto: { a: string, b?: number, }) {
    let {a, b = 1001} = algumObjeto;
}

type C = { a: string, b?: number };
function funcaoMinhaLista({a, b}: C): void {
}

function funcaoOutraLista({a, b} = { a: "", b: 0 }): void {
}
funcaoOutraLista();