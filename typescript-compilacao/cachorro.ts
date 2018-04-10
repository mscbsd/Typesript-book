// Importacao da biblioteca encadeavel
import cachorro = require("./cachorro.interface");

// Chamada direta
cachorro("Fila").late();

// Criando objeto com new
var bob = new cachorro("SRD");

// Adicionando propriedades diretamente
bob.raca = "Vira-lata";


