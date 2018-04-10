import "reflect-metadata";

const requeridoMeta = Symbol("required");

function requerido(alvo: Object, propriedade: string | symbol, indiceParametro: number) {
    let existeParametroRequerido: number[] = Reflect.getOwnMetadata(requeridoMeta, alvo, propriedade) || [];
    existeParametroRequerido.push(indiceParametro);
    Reflect.defineMetadata(requeridoMeta, existeParametroRequerido, alvo, propriedade);
}

function valida(alvo: any, propriedade: string, descritor: TypedPropertyDescriptor<Function>) {
    let metodo = descritor.value;
    descritor.value = function () {
        let parametroRequerido: number[] = Reflect.getOwnMetadata(requeridoMeta, alvo, propriedade);
        if (parametroRequerido) {
            for (let indiceParametro of parametroRequerido) {
                if (indiceParametro >= arguments.length || arguments[indiceParametro] === undefined) {
                    throw new Error("Passado parametro incorreto.");
                }
            }
        }

        return metodo.apply(this, arguments);
    }
}
class Verifica {
    algumaString: string;

    constructor(parametroConstrutor: string) {
        this.algumaString = parametroConstrutor;
    }

    @valida
    teste(@requerido nome: string) {
        return "Este é um teste do parametro requerido => " + nome + ", " + this.algumaString;
    }
}

let testaDecorador = new Verifica("Parametro construtor");
console.log(testaDecorador);
console.log(testaDecorador.teste("teste"));
//console.log(testaDecorador.teste(123));// Produz um erro pois o parametro é declarado como string
//console.log(testaDecorador.teste(true));// Produz um erro pois o parametro é declarado como string