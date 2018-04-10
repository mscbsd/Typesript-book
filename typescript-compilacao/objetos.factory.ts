// pensando em como gerar o código
namespace animaisFactory {
    interface AnimalOpcoes {
        nome: string;
        peso?: number;
        altura?: number;
    }
    function gerar(nome: string, AnimalOpcoes?: AnimalOpcoes): Animal;
}

// pensando em como usar o código
animaisFactory.gerar("Periquito");
animaisFactory.gerar("Cachorro", { nome: "Bob" });
animaisFactory.gerar("Papagaio", { nome: "Alfredo", peso: 400 });
// Emite um erro pois se declarar as opção nome se torna obrigatorio
animaisFactory.gerar("Gato", { peso: 800 });