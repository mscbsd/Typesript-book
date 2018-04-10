export class Calculadora {
    private corrente = 0;
    private memoria = 0;
    private operador: string;

    protected verificaDigitos(digito: string, valorAtual: number) {
        if (digito >= "0" && digito <= "9") {
            return valorAtual * 10 + (digito.charCodeAt(0) - "0".charCodeAt(0));
        }
    }

    protected verificaOperador(operador: string) {
        if (["+", "-", "*", "/"].indexOf(operador) >= 0) {
            return operador;
        }
    }

    protected avaliaOperador(operador: string, primeiro: number, segundo: number): number {
        switch (this.operador) {
            case "+": return primeiro + segundo;
            case "-": return primeiro - segundo;
            case "*": return primeiro * segundo;
            case "/": return primeiro / segundo;
        }
    }

    private verificador() {
        if (this.operador) {
            this.memoria = this.avaliaOperador(this.operador, this.memoria, this.corrente);
        }
        else {
            this.memoria = this.corrente;
        }
        this.corrente = 0;
    }

    public verificaCaracter(char: string) {
        if (char === "=") {
            this.verificador();
            return;
        }
        else {
            let valor = this.verificaDigitos(char, this.corrente);
            if (valor !== undefined) {
                this.corrente = valor;
                return;
            }
            else {
                let valor = this.verificaOperador(char);
                if (valor !== undefined) {
                    this.verificador();
                    this.operador = valor;
                    return;
                }
            }
        }
        throw new Error(`Caracter invalido: '${char}'`);
    }

    public resultado() {
        return this.memoria;
    }
}

export function teste(c: Calculadora, conta: string) {
    for (let i = 0; i < conta.length; i++) {
        c.verificaCaracter(conta[i]);
    }

    console.log(`Resultado da conta '${conta}' é igual a '${c.resultado()}'`);
}