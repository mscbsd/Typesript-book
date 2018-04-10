namespace Figuras {
    export namespace Poligono {
        export class Triangulo { }
        export class Retangulo { }
    }
}

import poligonos = Figuras.Poligono;
let ret = new poligonos.Retangulo(); 
// Identico a usar 'new Figuras.Poligono.Retangulo()'