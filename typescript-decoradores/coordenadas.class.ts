function configuracao(valor: boolean) {
    return function (alvo: any, propriedade: string, descritor: PropertyDescriptor) {
        // metodo nativo PropertyDescriptor.configurable
        descritor.configurable = valor;
    };
}

class Coordenadas {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configuracao(false)
    get x() { return this._x; }

    @configuracao(false)
    get y() { return this._y; }
}

let espaco = new Coordenadas(11,12);
console.log(espaco);
