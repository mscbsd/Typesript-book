
let completo: boolean = false;

let decimal: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octagonal: number = 0o744;


let cor: string = "blue";
cor = 'red';

let nomeCompleto: string = `Marcelo Costa`;
let idade: number = 50;
let sentenca: string = `Olá, meu nome é ${ nomeCompleto }.

Vou fazer ${ idade + 1 } anos no próximo mês.`


//Isto é equivalente a declarar a sentença da seguinte forma:

let outraSentenca: string = "Olá, meu nome é " + nomeCompleto + ".\n\n" +
    "Vou fazer " + (idade + 1) + " anos no próximo mês."

let lista: number[] = [1, 2, 3];
let outraLista: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["olá", 10]; // correto
x = [10, "olá"]; // vai produzir um erro


enum minhaCor1 {Vermelho, Verde, Blue};
let c1: minhaCor1 = minhaCor1.Verde;

enum minhaCor2 {Vermelho = 1, Verde, Azul};
let c2: minhaCor2 = minhaCor2.Verde;

enum minhaCor3 {Vermelho = 1, Verde = 2, Azul = 4};
let c3: minhaCor3 = minhaCor3.Verde;

enum minhaCor4 {Vermelho = 1, Verde, Azul};
let nomeCor: string = minhaCor4[2];

console.log(nomeCor);

let naoSei: any = 4;
naoSei = "uma string qualquer";
naoSei = false;
let listaQualquer: any[] = [1, true, "um texto qualquer"];


function imprimeTela(): void {
    console.log("Uma mensagem qualquer");
}

let qualquerCoisa: void = undefined;

let algumacoisa: any = "isto é uma string";

let tamanhoString: number = (<string>algumacoisa).length;

let tamanho: number = (algumacoisa as string).length;

var valor = 10;

function qualquer(){
var variavel = “bem vindo”;
return variavel;
}

function funcaoLista(){
    var a = 10;
    return function g(){
        var b = a+1;
        return b;
    }
}
var g=funcaoLista();
g(); // imprime  o valor 11

function funcaoLista(){
    var a = 1;
    a=2;
    var b = g();
    a = 3;
    function g(){
        return a;
    }
}
funcaoLista(); // retorna o valor 2


function funcaoLista(algumaCoisa: boolean) {
    if (algumaCoisa) {
        var x = 10;
    }

    return x;
}
console.log(funcaoLista(true));  // retorna o valor '10'
console.log(funcaoLista(false)); // retorno valor indefinido 'undefined'

function somaMatrix(matriz: number[][]) {
    var soma = 0;
    for (var i = 0; i < matriz.length; i++) {
        var elemento = matriz[i];
        for (var i = 0; i < elemento.length; i++) {
            soma += elemento[i];
        }
    }
    return soma;
}


for (var i = 0; i < 10; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}

for (var i = 0; i < 10; i++) {
    // captura o valor de 'i'
    // chama a funcao com o valor corrente
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}

let algumaCoisa = "algumValor";

function funcaoLista(entrada: boolean) {
    let a = 100;
    if (entrada) {
        // pega o valor de 'a' que esta no escopo maior
        let b = a + 1;
        return b;
    }
    // produz um erro porque não existe b neste escopo
    return b;
}


try {
    throw "algum resultado";
}
catch (e) {
    console.log("Ocorreu um erro.");
}
// produz um erro pois 'e' não faz parte deste escopo
console.log(e);

a++; // produz um erro pois 'a' ainda não foi declarado
let a;

function foo() {
    // pronto para capturar o valor de 'a'
    return a;
}
// chamada inlegal de foo antes de declarar 'a'
foo();
let a;

function funcaoLista(x) {
    var x;
    var x;
    if (true) {
        var x;
    }
}

let x = 10;
let x = 20; // produz um erro de redeclaração

function funcaoLista(condicao, x) {
    if (condicao) {
        let x = 100;
        return x;
    }
    return x;
}
funcaoLista(false, 0); // retorna o valor '0'
funcaoLista(true, 0);  // retorna o valor '100'

function somaMatriz(matriz: number[][]) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        var elemento = matriz[i];
        for (let i = 0; i < elemento.length; i++) {
            soma += elemento[i];
        }
    }
    return soma;
}


function cidadesMaravilhosa() {
    let pegarCidade;
    if (true) {
        let cidade = "Rio de Janeiro";
        pegarCidade = function() {
            return cidade;
        }
    }
    return pegarCidade();
}


for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}

const cidadeMaravilhosa = "Rio de Janeiro";

const numeroRodas = 4;
const carro = {
    nome: "BMW",
    totalDeRodas: totalDeRodas,
}

// Produz um erro
carro = {
    nome: "Volks",
    totalDeRodas: totalDeRodas
};

// nao produz erro
carro.nome = "Mercedez";
carro.nome = "Chevrolet";
