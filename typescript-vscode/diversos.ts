

let serVivo: Animal[] = [new Mamifero(), new Macaco(), new Peixe()];

window.onmousedown = function (mouseEvent: any) {
    console.log(mouseEvent.buton);
};

interface NomePessoas {
    nome: string;
}
class Pessoas {
    nome: string;
}
let p: NomePessoas;
p = new Pessoas();

interface NomePessoas {
    nome: string;
}
let x: NomePessoas;
let y = { nome: "Marcelo", cidade: "Rio de Janeiro" };
x = y;

interface NomePessoas {
    nome: string;
}
function Alo(n: NomePessoas) {
    console.log("Alo, " + n.nome);
}
Alo(y); // OK

let x = (a: number) => 0;
let y = (b: number, c: string) => 0;

y = x; // retorna verdadeiro
x = y; // exibe um erro

let lista = [1, 2, 3];
lista.forEach((item, index, array) => console.log(item));
lista.forEach(item => console.log(item));

let x = () => ({ nome: "Marcelo" });
let y = () => ({ nome: "Marcelo", cidade: "Rio de Janeiro" });

x = y; // retorna verdadeiro
y = x; // Provoca um erro pois não é permitido

// da biblioteca de eventos do typescript
enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { x: number; y: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}
// Duvidoso mais é comum
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));
// Alternativa indesejavel mas admitida
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y));
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + "," + e.y)));
// imcompativel
listenEvent(EventType.Mouse, (e: number) => console.log(e));


function aguardaRetorno(args: any[], retornaResultado: (...args: any[]) => void) {
    /* ... */
}
// funciona porque aguardaRetorno pode receber qualquer tipo e quntidade de parametros
aguardaRetorno([1, 2], (x, y) => console.log(x + ", " + y));
// confuso pois são opcionais ou requeridos ?
aguardaRetorno([1, 2], (x?, y?) => console.log(x + ", " + y));


enum Formas { redondo, quadrado };
enum Cores { Verde, Amarelo, Branco };

let forma = Formas.quadrado;
// imcompativel , não faz parte do tipo Formas
forma = Cores.Verde;


class Dinossauro {
    altura: number;
    constructor(nome: string, numeroPatas: number) { }
}
class Animais {
    altura: number;
    constructor(numeroPatas: number) { }
}
let dino: Dinossauro;
let animal: Animais;
dino = animal;
animal = dino;

interface algumGenerico<T> {
}
let xx: algumGenerico<number>;
let yy: algumGenerico<string>;
xx = yy;  // é compativel

interface outroGenerico<T> {
    dados: T;
}
let xxx: outroGenerico<number>;
let yyy: outroGenerico<string>;
xxx = yyy; // incompativel

let indo = function <T>(x: T): T {
    // ...
}
let voltando = function <U>(y: U): U {
    // ...
}
indo = voltando;  // compativel, igual a , let indo:<T>(x:T)=>T

function qualquerFuncao(n: string | number) { /* ... */ }
qualquerFuncao('foo'); // aceita string
qualquerFuncao(42); // aceita numero
qualquerFuncao(true); // não aceita booleano

var valorX: number | boolean;
if (typeof valorX === 'number') {
    // ...
}

interface Veiculo {
    peso: number;
    marchas: number;
    tipo: string;
}
interface Bicicleta {
    peso: number;
    marchas: boolean;
    tamanho: string;
}
var transporte: Veiculo | Bicicleta // definimos que podemos ter os dois tipos;
var quantoPesa: number = transporte.peso;
var quantidadeMarchas = transporte.marchas;

console.log(transporte.tipo); // erro porque nao temos o tipo em bicicleta
console.log((<Veiculo>transporte).tipo); // especificando o tipo não temos erro


function verificaAlgo(valor: number, teste: string | number) {
    if (typeof teste === "number") {
        return teste + " " + valor; // retorna uma string
    }
    if (typeof teste === "string") {
        return teste + valor; // retorna o valor da soma
    }
}

interface Leite {
    tipoLeite(): string;
}
class Vaca implements Leite {
    constructor(private tipo: string) { }
    tipoLeite() {
        return this.tipo;
    }
}
class Cabra implements Leite {
    constructor(private tipo: string) { }
    tipoLeite() {
        return this.tipo;
    }
}
function tipoLeite(algumLeite: any) {
    if (algumLeite instanceof Vaca) {
        console.log("O leite é de Vaca");
    }
    if (algumLeite instanceof Cabra) {
        console.log("O leite é de Cabra");
    }
}
let leiteDeVaca = new Vaca("B");
let leiteDeCabra = new Cabra("B");

// imprime : "O leite é de Vaca"
tipoLeite(leiteDeVaca.tipoLeite());
// imprime: O leite é de Cabra
tipoLeite(leiteDeCabra.tipoLeite());


function extende<T, U>(primeiro: T, segundo: U): T & U {
    let resultado = <T & U>{};
    for (let id in primeiro) {
        (<any>resultado)[id] = (<any>primeiro)[id];
    }
    for (let id in segundo) {
        if (!resultado.hasOwnProperty(id)) {
            (<any>resultado)[id] = (<any>segundo)[id];
        }
    }
    return resultado;
}
class Nomes {
    constructor(public nome: string) { }
}
interface IRegistro {
    log(): void;
}
class Resgistra implements IRegistro {
    log() {
        // ...
    }
}
var nome = extende(new Nomes("Marcelo"), new Resgistra());
var n = nome.nome;
nome.log();

type Nome = string;
type Apelido = () => string;
type NomeApelido = Nome | Apelido;
function pegarNome(n: NomeApelido): Nome {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}

type TipoAliases<T> = { valor: T };

type NovoTipo<T> = {
    valor: T;
    direita: NovoTipo<T>;
    esuqerda: NovoTipo<T>;
}

type Favoritos<T> = T & { proximo: Favoritos<T> };
interface Lugares {
    nome: string;
}
var locais: Favoritos<Lugares>;
var s = locais.nome;
var s = locais.proximo.nome;
var s = locais.proximo.proximo.nome;
var s = locais.proximo.proximo.proximo.nome;

// erro pois o tipo nao pode ser referir a ele mesmo
type TipoErro = Array<TipoErro>;

type TipoVeiculo = "Carro" | "Moto" | "Bicicleta";
class Veiculo {
    roda(diametro: number, tipo: TipoVeiculo) {
        if (tipo === "Carro") {
            console.log("Este veiculo é um carro");
        }
        else if (tipo === "Moto") {
            console.log("Este veiculo é uma motocicleta");
        }
        else if (tipo === "Bicicleta") {
            console.log("Este veiculo é uma bicicleta");
        }
        else {
            // nao pode ser indefinido.
        }
    }
}

let veiculo = new Veiculo();
veiculo.roda(15, "Carro");
veiculo.roda(10, "rolema"); // erro : nao existe este tipo de veiculo

function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
function createElement(tagName: string): Element {
    // 
}


class Calculadora {
    public constructor(protected valor: number = 0) { }
    public valorAtual(): number {
        return this.valor;
    }
    public adicionar(operador: number): this {
        this.valor += operador;
        return this;
    }
    public multiplicar(operador: number): this {
        this.valor *= operador;
        return this;
    }
    // outras operações possiveis.
}

let v = new Calculadora(2)
    .multiplicar(5)
    .adicionar(1)
    .valorAtual();

class CalculadoraCientifica extends Calculadora {
    public constructor(valor = 0) {
        super(valor);
    }
    public seno() {
        this.valor = Math.sin(this.valor);
        return this;
    }
    // ... mais operações 
}

let calculo = new CalculadoraCientifica(2)
    .multiplicar(5)
    .seno()
    .adicionar(1)
    .valorAtual();
