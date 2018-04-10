namespace Legumes {
    let saoRaizes = true;

    export function legumesQueSaoRaizes() {
        return saoRaizes;
    }
}

namespace Legumes {
    export function tipoLegumes() {
        return saoRaizes;// gera um erro pois saoRaizes não é visivel
    }
}