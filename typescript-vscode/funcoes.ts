
function funcaoComNome(x, y) {
    return x + y;
}

let funcaoAnonima = function (x, y) { return x + y; };

let z = 100;
function funcaoAdicionaZ(x, y) {
    return x + y + z;
}

let funcaoTipada = function(x: number, y: number): number { return x+y; };

let funcaoTipos: (x: number, y: number) => number =
    function (x: number, y: number): number { return x + y; };

let funcaoInterferencia: (valorInicial: number, incremento: number) => number =
    function (x: number, y: number): number { return x + y; };


function nomeCompleto(nome: string, sobrenome?: string) {
    return nome + " " + sobrenome;
}
let meuNome = nomeCompleto("Marcelo","Costa"); 
let meChamam = nomeCompleto("Marcelo");
console.log(meuNome);
console.log(meChamam);

function nomeFamilia(nome: string, sobrenome="Costa") {
    return nome + " " + sobrenome;
}
// retornam "Marcelo Costa"
let nomeCompleto1 = nomeFamilia("Marcelo","Costa"); 
let nomeCompleto2 = nomeFamilia("Marcelo");
let nomeCompleto3 = nomeFamilia("Marcelo",undefined);

function marceloOque(nome="Marcelo", sobrenome:string) {
    return nome + " " + sobrenome;
}
// retorna "Marcelo Costa"
let marcelodeque = marceloOque(undefined,"Costa");

function nomesGrandes(nome: string, ...sobrenomes: string[]) {
    return nome + " " + sobrenomes.join(" ");
}
let nomeComprido = nomesGrandes("José", "da", "Silva", "Sauro");
console.log(nomeComprido);

var multiplicacao1 = function (h: number, w: number) {  
    return h * w;
};

var multiplicacao2 = (h: number, w: number) => h * w;


function areRetangulo(x: number): number; // Esta sobrecarga possui os argumentos para calcular a area de um quadrado dado um lado
    function areRetangulo(x: number, y: number): number; // Está função possui os argumentos para calcular a área de um retângulo dado dois lados
    function areRetangulo(x: number, y?: number): number {
        return x * (y > 0 ? y : x);
    }

let quadrado = areRetangulo(4);
console.log("area do quadrado = " + quadrado);
let retangulo = areRetangulo(4,5);
console.log("area do retangulo = " + retangulo);