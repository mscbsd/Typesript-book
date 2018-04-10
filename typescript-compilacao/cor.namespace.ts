enum Cor {
    vermelho = 1,
    verde = 2,
    azul = 4
}

namespace Cor {
    export function misturaCores(nomeCor: string) {
        if (nomeCor == "amarelo") {
            return Cor.vermelho + Cor.verde;
        }
        else if (nomeCor == "branco") {
            return Cor.vermelho + Cor.verde + Cor.azul;
        }
        else if (nomeCor == "magenta") {
            return Cor.vermelho + Cor.azul;
        }
        else if (nomeCor == "ciano") {
            return Cor.verde + Cor.azul;
        }
    }
}

interface A_Static {
    new(m: any): A_Instance;
    st: string;
}
interface A_Instance {
    inst: number;
}
declare var A: A_Static;