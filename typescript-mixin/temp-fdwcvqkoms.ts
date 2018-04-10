// Disposable Mixin
class Opcional {
    ehOpcional: boolean;
    existe() {
        this.ehOpcional = true;
    }

}

// Activatable Mixin
class LigaDesliga {
    estaAtivo: boolean;
    liga() {
        this.estaAtivo = true;
    }
    desliga() {
        this.estaAtivo = false;
    }
}

class TestaObjetos implements Opcional, LigaDesliga {
    constructor() {
        setInterval(() => console.log(this.estaAtivo + " : " + this.ehOpcional), 500);
    }

    interact() {
        this.liga();
    }

    // Opcional
    ehOpcional: boolean = false;
    existe: () => void;
    // Liga Desliga
    estaAtivo: boolean = false;
    liga: () => void;
    desliga: () => void;
}
aplicaMixins(TestaObjetos, [Opcional, LigaDesliga]);

let objetoTeste = new TestaObjetos();
setTimeout(() => objetoTeste.interact(), 1000);


function aplicaMixins(parametroTeste: any, parametroBase: any[]) {
    parametroBase.forEach(base => {
        Object.getOwnPropertyNames(base.prototype).forEach(nome => {
            parametroTeste.prototype[nome] = base.prototype[nome];
        });
    });
}