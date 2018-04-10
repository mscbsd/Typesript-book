declare function require(nomeModulo: string[], onLoad: (...args: any[]) => void): void;

import { CepValidador as CEP } from "./cep-validador";

if (validaCep) {
    require(["./cep-validador"], (CepValidador: typeof CEP) => {
        let validacao = new CepValidador();
        if (validacao.ehValido("...")) { /* ... */ }
    });
}