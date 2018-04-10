
namespace Validadores {
    export interface StringValidador {
        ehValido(s: string): boolean;
    }

    let letrasRegexp = /^[A-Za-z]+$/;
    let numerosRegexp = /^[0-9]+$/;

    export class SomenteLetrasValidador implements StringValidador {
        ehValido(s: string) {
            return letrasRegexp.test(s);
        }
    }

    export class CepValidador implements StringValidador {
        ehValido(s: string) {
            return s.length === 8 && numerosRegexp.test(s);
        }
    }
}

// alguns dados
let dadosTeste = ["Marcelo", "22271080", "2017"];

// Vamos criar uma lista de validadores
let valida: { [s: string]: Validadores.StringValidador; } = {};
valida["CEP"] = new Validadores.CepValidador();
valida["Letras"] = new Validadores.SomenteLetrasValidador();

// Vamos verificar os nossos dados
for (let s of dadosTeste) {
    for (let validador in valida) {
        let verifica = valida[validador].ehValido(s);
        console.log(`'${s}' ${verifica ? "Validado pelo validador" : "Inválido para o validador"} '${validador}'.`);
    }
}
