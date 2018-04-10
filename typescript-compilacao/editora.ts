class Editora {
    label: Editora.EditoraLabel;
}
namespace Editora {
    export class EditoraLabel { }
}

function novoLabel(nome: string): string {
    return novoLabel.prefixo + nome + novoLabel.sufixo;
}

namespace novoLabel {
    export let sufixo = "";
    export let prefixo = "Novatec, ";
}

// imprime: Novatec, Marcelo Costa
console.log(novoLabel("Marcelo Costa"));