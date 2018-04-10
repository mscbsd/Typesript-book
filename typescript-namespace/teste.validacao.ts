/// <reference path="namespace-validacao.ts" />
/// <reference path="somente-letras.validacao.ts" />
/// <reference path="cep.validacao.ts" />

// dados para teste do namespace validacao
let testeValidacao = ["Marcelo", "22271080", "2017"];

// Vamos criar uma lista de validadores do namespace
let testeValidadores: { [s: string]: Validacao.StringValidacao; } = {};
testeValidadores["CEP"] = new Validacao.CepValidacao();
testeValidadores["Letras"] = new Validacao.SomenteLetrasValidacao();

// Vamos validar os nossos dados pelo nosso namespace 
for (let s of testeValidacao) {
      for (let nomeValidador in testeValidadores) {
        let verifica = testeValidadores[nomeValidador].ehValido(s);
        console.log(`'${s}' ${verifica ? "Validado pelo validador" : "Inválido para o validador"} '${nomeValidador}'.`);
    }
}