function enumerador(valor: boolean) {
    return function (alvo: any, propriedade: string, descritor: PropertyDescriptor) {
        descritor.enumerable = valor;
    };
}
class ClasseEnumerador {
    umaString: string;
    constructor(parametro: string) {
        this.umaString = parametro;
    }

    @enumerador(false)
    metodo() {
        return "Imprime enumerador, " + this.umaString;
    }
}

let algumObjeto = new ClasseEnumerador('teste');
console.log(algumObjeto);