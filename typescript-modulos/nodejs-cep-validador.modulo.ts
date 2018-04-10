declare function require(nomeModulo: string): any;

import { CepValidador as CEP } from "./cep-validador";

if(validaCep){
    let CepValidador: typeof CEP = require("./cep-validador");
    let validacao = new CepValidador();
    if(validacao.ehValido("...")){
        /* Alguma acao para o CEP valido */
        let cepValidado = true;
        console.log("É um CEP valido");
    }
}