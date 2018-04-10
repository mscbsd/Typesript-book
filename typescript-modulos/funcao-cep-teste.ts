import validaFuncaoCep from "./funcao-cep-validador";
let variaveis = ["Marcelo", "22271080", "20000"];
variaveis.forEach(s => {
  console.log(`"${s}" ${validaFuncaoCep(s) ? " é um cep" : "não é um cep"}`);
});