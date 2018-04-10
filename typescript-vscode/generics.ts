/*
function identidade(argumento:any){
    return argumento;
}
*/

function identidade<T>(argumento:T):T{
    return argumento;
}

let implementacao1 = identidade<string>("minhaString");
let implementacao2 = identidade("minhaString");

function erroIdentidade<T>(argumento: T): T {
    console.log(argumento.length);
    return argumento;
}

function matrizIdentidade<T>(argumento: T[]): T[] {
    console.log(argumento.length);
    return argumento;
}

function alternativaIdentidade<T>(argumento: Array<T>): Array<T> {
    console.log(argumento.length);
    return argumento;
}

function tipoIdentidade<T>(argumento: T): T {
    return argumento;
}
let minhaIdentidade: <T>(argumento: T) => T = tipoIdentidade;

function tipoIdentidadeAlternativa<T>(argumentos: T): T {
    return argumentos;
}
let minahIdentidadeAlt: <U>(argumentos: U) => U = tipoIdentidadeAlternativa;

function tipoIdentidadeLiteral<T>(argumentos: T): T {
    return argumentos;
}
let minhaIdentidadeLit: {<T>(argumentos: T): T} = tipoIdentidadeLiteral;

interface InterfaceIdentidadeGenerica {
    <T>(argumetos: T): T;
}
function identidadeGenericaAlt<T>(argumetos: T): T {
    return argumetos;
}
let minhaIdentidadeGenerica: InterfaceIdentidadeGenerica = identidadeGenericaAlt;

interface InterfaceGenerica<T> {
    (argumetos: T): T;
}
function funcaoIdentidade<T>(argumetos: T): T {
    return argumetos;
}
let minhaIdentidadeGenericaAlt: InterfaceGenerica<number> = funcaoIdentidade;

class NumeroGenerico<T> {
    valorZero: T;
    adiciona: (x: T, y: T) => T;
}
let meuNumeroGenerico = new NumeroGenerico<number>();
meuNumeroGenerico.valorZero = 0;
meuNumeroGenerico.adiciona = function(x, y) { return x + y; };

let stringNumerica = new NumeroGenerico<string>();
stringNumerica.valorZero = "";
stringNumerica.adiciona = function(x, y) { return x + y; };
console.log(stringNumerica.adiciona(stringNumerica.valorZero, "test"));

interface quantidadeCaracteres {
    quantidade: number;
}
function verificaQuantidade<T extends quantidadeCaracteres>(arg: T): T {
    console.log(arg.quantidade);  
    return arg;
}
verificaQuantidade(3);// emite um erro por não atender a interface  
verificaQuantidade({quantidade: 10, value: 3});// atente os requesitos da interface

function copiaCampos<T extends U, U>(alvo: T, origem: U): T {
    for (let id in origem) {
        alvo[id] = origem[id];
    }
    return alvo;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
copiaCampos(x, { b: 10, d: 20 }); // sem erros
copiaCampos(x, { Q: 90 });  // não encontra o tipo de Q , emite erro