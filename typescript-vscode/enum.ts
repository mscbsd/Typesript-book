enum pontosCardeais {
    norte = 1,
    sul,
    leste,
    oeste
}

enum Acesso {
    // membros constantes
    Negado,
    Leitura = 1,
    Escrita = 2,
    LerEscrever = Leitura | Escrita,
}

const enum Enum {
    A = 1,
    B = A * 2
}

const enum Direcoes {
    paraCima,
    paraBaixo,
    direita,
    esquerda
}
// identico a expressão
let direcoes = [Direcoes.paraCima, Direcoes.paraBaixo, Direcoes.direita, Direcoes.esquerda];


