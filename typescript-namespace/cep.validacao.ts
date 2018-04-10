/// <reference path="namespace-validacao.ts" />
namespace Validacao {
    const numerosRegexp = /^[0-9]+$/;
    export class CepValidacao implements StringValidacao {
        ehValido(s: string) {
            return s.length === 8 && numerosRegexp.test(s);
        }
    }
}