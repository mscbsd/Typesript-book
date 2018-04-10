declare const System: any;

import { CepValidador as CEP } from "./cep-validador";

if (validaCep) {
    System.import("./cep-validador").then((CepValidador: typeof CEP) => {
        var x = new CepValidador();
        if (x.ehValido("...")) { /* ... */ }
    });
}