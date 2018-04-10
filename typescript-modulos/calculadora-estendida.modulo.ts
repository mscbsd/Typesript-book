import { Calculadora } from "./calculadora.modulo";

//import { Calculadora } from "./Calculator";

class CalculadoraEstendida extends Calculadora {
    static digitos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    constructor(public base: number) {
        super();
        if (base <= 0 || base > CalculadoraEstendida.digitos.length) {
            throw new Error("a base deve ser entre 0 to 16 .");
        }
    }

    protected verificaDigitos(digito: string, currentValue: number) {
        if (CalculadoraEstendida.digitos.indexOf(digito) >= 0) {
            return currentValue * this.base + CalculadoraEstendida.digitos.indexOf(digito);
        }
    }
}

// Exporta a calculadora estendida com o nome de calculadora
export { CalculadoraEstendida as Calculadora };
// Reexportamos a funcao teste
export { teste } from "./calculadora.modulo";
