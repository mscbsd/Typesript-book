/// <reference path="namespace-validacao.ts" />
namespace Validacao {
    const letrasRegexp = /^[A-Za-z]+$/;
    export class SomenteLetrasValidacao implements StringValidacao {
        ehValido(s: string) {
            return letrasRegexp.test(s);
        }
    }
}