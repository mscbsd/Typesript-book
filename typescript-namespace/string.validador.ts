let letrasRegexp = /^[A-Za-z]+$/;
let numerosRegexp = /^[0-9]+$/;

interface StringValidador {
    ehValido(s: string): boolean;
}

class SomenteLetrasValidador implements StringValidador {
    ehValido(s: string) {
        return letrasRegexp.test(s);
    }
}

class CepValidador implements StringValidador {
    ehValido(s: string) {
        return s.length === 8 && numerosRegexp.test(s);
    }
}

// alguns dados
let dados = ["Marcelo", "22271080", "2017"];

// Vamos criar uma lista de validadores
let validadores: { [s: string]: StringValidador; } = {};
validadores["CEP"] = new CepValidador();
validadores["Letras"] = new SomenteLetrasValidador();

// Vamos verificar os nossos dados
for (let s of dados) {
    for (let validador in validadores) {
        let verifica = validadores[validador].ehValido(s);
        console.log(`'${ s }' ${ verifica ? "Validado pelo validador" : "Inválido para o validador" } '${ validador }'.`);
    }
}