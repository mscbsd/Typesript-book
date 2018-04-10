import cep = require("./require-cep-validador");
let strings = ["Marcelo", "22271080", "22000"];
let valida = new cep();
strings.forEach(s => {
  console.log(`"${ s }" - ${ valida.ehUmCep(s) ? "Cep Válido" : "Cep inválido" }`);
});