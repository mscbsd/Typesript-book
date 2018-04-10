function Propriedade(
    alvo: Object, // Objeto prototipo da classe
    propriedade: string | symbol // Nome do tipo da propriedade
    ) {
    console.log("Decorador de propriedade: ", alvo, propriedade);
}

class ClassePropriedade {
    @Propriedade
    nome: string;
}