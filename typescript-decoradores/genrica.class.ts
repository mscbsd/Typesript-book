@decorador
class Generica {
    algumaString: string;
    constructor(valorString: string) {
        this.algumaString = valorString;
    }
    imprime() {
        return "Imprime, " + this.algumaString;
    }
}