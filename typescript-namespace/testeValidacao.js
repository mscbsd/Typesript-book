/// <reference path="namespace-validacao.ts" />
var Validacao;
(function (Validacao) {
    var letrasRegexp = /^[A-Za-z]+$/;
    var SomenteLetrasValidacao = (function () {
        function SomenteLetrasValidacao() {
        }
        SomenteLetrasValidacao.prototype.ehValido = function (s) {
            return letrasRegexp.test(s);
        };
        return SomenteLetrasValidacao;
    }());
    Validacao.SomenteLetrasValidacao = SomenteLetrasValidacao;
})(Validacao || (Validacao = {}));
/// <reference path="namespace-validacao.ts" />
var Validacao;
(function (Validacao) {
    var numerosRegexp = /^[0-9]+$/;
    var CepValidacao = (function () {
        function CepValidacao() {
        }
        CepValidacao.prototype.ehValido = function (s) {
            return s.length === 8 && numerosRegexp.test(s);
        };
        return CepValidacao;
    }());
    Validacao.CepValidacao = CepValidacao;
})(Validacao || (Validacao = {}));
/// <reference path="namespace-validacao.ts" />
/// <reference path="somente-letras.validacao.ts" />
/// <reference path="cep.validacao.ts" />
// dados para teste do namespace validacao
var testeValidacao = ["Marcelo", "22271080", "2017"];
// Vamos criar uma lista de validadores do namespace
var testeValidadores = {};
testeValidadores["CEP"] = new Validacao.CepValidacao();
testeValidadores["Letras"] = new Validacao.SomenteLetrasValidacao();
// Vamos validar os nossos dados pelo nosso namespace 
for (var _i = 0, testeValidacao_1 = testeValidacao; _i < testeValidacao_1.length; _i++) {
    var s = testeValidacao_1[_i];
    for (var nomeValidador in testeValidadores) {
        var verifica = testeValidadores[nomeValidador].ehValido(s);
        console.log("'" + s + "' " + (verifica ? "Validado pelo validador" : "Inválido para o validador") + " '" + nomeValidador + "'.");
    }
}
