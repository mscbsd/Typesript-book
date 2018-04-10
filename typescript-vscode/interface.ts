interface tipoDocumento {
    nome: string;
    tamanho?: number;
}

function documento(tipo: tipoDocumento) {
    //console.log(tipo.nome);
    if (tipo.tamanho == 11 && tipo.nome == 'CPF') {
        console.log('O numero de caracteres e o tipo são de um CPF')
    } else {
        console.log('Não se pode afirmar que seja um CPF')
    }
}

// imprime : O numero de caracteres e o tipo são de um CPF
let meuDOcumento = { tamanho: 11, nome: "CPF" };
documento(meuDOcumento);
// imprime : Não se pode afirmar que seja um CPF
let meuDOcumento2 = { nome: "Titulo de Eleitor" };
documento(meuDOcumento2);

documento(meuDOcumento3 as tipoDocumento);

let meuDOcumento3 = { caracteres: 11, nome: "CPF" };


interface InterfacePesquisa{
    (texto:string,palavras:string):boolean;
}

let FuncaoPesquisa: InterfacePesquisa;

FuncaoPesquisa = function(texto: string, pesquisa: string) {
    let resultado = texto.search(pesquisa);
    if (resultado == -1) {
        console.log('palavra não encontrada a palavra => ' + pesquisa);
      return false;
    }
    else {
        console.log('encontrada a palavra => ' + pesquisa);
      return true;
    }
}

// imprime : encontrada a palavra => qualquer
FuncaoPesquisa('um texto qualquer','qualquer');
//imprime : palavra não encontrada a palavra => blabla
FuncaoPesquisa('um texto qualquer','blabla');

interface InterfaceLista {
    [indice: number]: string;
}

let minhaLista: InterfaceLista;
minhaLista = ["Marcelo Costa", "João da Silva"];

let minhaString: string = minhaLista[0];
// imprime : Marcelo Costa
console.log(minhaString);

let meuAmigo: string = minhaLista['1'];
// imprime : João da Silva
console.log(meuAmigo);

interface InterfaceCarro {
    motor: string;
    placa?: string;
    carroLuxo(nome:string):boolean;
}

interface InterfaceVeiculo{
    nome:string;
    quantidadeDeRodas:number;
}

class Carro implements InterfaceCarro,InterfaceVeiculo {
    nome:string;
    quantidadeDeRodas:number;
    constructor(public motor: string, public placa: string) {
    }
    carroLuxo(nome:string){
        if(nome=='BMW'){
            return true;
        }

    }
} 


interface SerVivo{
    nome:string;
}

interface Dinossauro{
    numeroDePatas:number;
}

interface Mamifero extends SerVivo,Dinossauro {
    tempoDeAmamentacao:number;
}


class Cliente
{
  private id: number;
  get Id(): number
  {
    return this.id
  }
  set Id( value: number )
  {
    this.id = value;
  }
}

interface InterfaceCliente extends Cliente
{
  NomeCliente: string;
}

class NovoCliente extends Cliente implements InterfaceCliente
{
  NomeCliente: string;
}

class OutroCliente extends Cliente
{
  NomeCliente: string;
}

let meuCliente = new OutroCliente;
meuCliente.NomeCliente="Maria do Carmo";
meuCliente.Id=99;
console.log(meuCliente);

let meuOutroCliente = new OutroCliente;
meuOutroCliente.NomeCliente="Silva Sauro";
meuOutroCliente.Id=100;
console.log(meuOutroCliente);

