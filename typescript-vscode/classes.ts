class Autor{
    public nome;
       constructor(nome){
       this.nome = nome;
       console.log(this.nome + " Constructor");
       
   }
}
let autor = new Autor("Marcelo");
console.log(autor.nome===Autor.prototype.nome);


class Pessoas {
    private nome: string;
    constructor(parametroNome:string) {
        this.nome = parametroNome;
        console.log(this.nome + " no construtor de Pessoas");
    }
    static metodoEstatico() {
        console.log("Este é o método abstrato");
    }
    bomDia() {
        console.log("Bom dia " + this.nome);
    }
    sobrecarga(){
        return 10;
    }
}


class Profissional extends Pessoas {
    constructor(nome: string) { 
        super(nome); 
        console.log(this.nome + " é um profissional");
    }


    sobrecarga(){
        return super.sobrecarga() + 10;
    }
}

/* imprime :
Marcelo no construtor de Pessoas
Este é o método abstrato
Bom dia Marcelo
*/
let pessoas = new Pessoas('Marcelo');
Pessoas.metodoEstatico();
pessoas.bomDia();
let sobrecargaPessoas = pessoas.sobrecarga();
// imprime : Sobrecarga em Pessoas 10
console.log('Sobrecarga em Pessoas ' + sobrecargaPessoas);


/* imprime: 
João no construtor de Pessoas
João é um profissional
*/
let p = new Profissional('João');
let sobrecargaProfissional = p.sobrecarga();
// imprime : Sobrecarga em Profissionais 20
console.log('Sobrecarga em Profissionais ' + sobrecargaProfissional);

let outraPessoa = new Pessoas('Maria');
outraPessoa.nome; // nao produz erro
outraPessoa.documento; // produz um erro


// classe Empregado sem get set
class Empregado {
    nomeCompleto: string;
}

let empregado = new Empregado();
empregado.nomeCompleto = "Marcelo Costa";
if (empregado.nomeCompleto) {
    console.log(empregado.nomeCompleto);
}


// Classe Empregados com get set
let senha = "senha secreta";

class Empregados {
    private _nomeCompleto: string;

    get nomeCompleto(): string {
        return this._nomeCompleto;
    }

    set nomeCompleto(novoNome: string) {
        // esse if verifica se existe a string senha
        // e se o valor é "senha secreta"
        if (senha && senha == "senha secreta") {
            this._nomeCompleto= novoNome;
        }
        else {
            console.log("Sem autorização para alterar o nome!");
        }
    }
}

let e = new Empregados();
e.nomeCompleto = "João da Silva";
if (e.nomeCompleto) {
    console.log(e.nomeCompleto);
}


// propriedades estáticas
class Grid {
    static origem = {x: 0, y: 0};
    distanciaDaOrigen(pontos: {x: number; y: number;}) {
        let xDist = (pontos.x - Grid.origem.x);
        let yDist = (pontos.y - Grid.origem.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.escala;
    }
    constructor (public escala: number) { }
}

let grid1 = new Grid(1.0);  // 1x
let grid2 = new Grid(5.0);  // 5x

console.log(grid1.distanciaDaOrigen({x: 10, y: 10}));
console.log(grid2.distanciaDaOrigen({x: 10, y: 10}));

// classe abstrata
abstract class Departamento {

    constructor(public nome: string) {
    }

    imprimeNome(): void {
        console.log("Nome do departamento: " + this.nome);
    }

    abstract imprimeAlgumaCoisa(): void; // metodo que tem que ser implementado na classe derivada
}

class Contabilidade extends Departamento {

    constructor() {
        super("Contabilidade"); // contrutor da classe abstrata
    }

    imprimeAlgumaCoisa(): void {
        console.log("Imprime uma mensagem qualquer.");
    }

    relatorios(): void {
        console.log("Gerando relatórios...");
    }
}


let contabilidade = new Contabilidade();
contabilidade.imprimeNome();
contabilidade.imprimeAlgumaCoisa();