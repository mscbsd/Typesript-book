// como gerar o codigo em typescript
interface Ferramenta {
    ferro(): void;
}

interface FerramentasFactory {
    new(nome: string): Ferramenta;
    (largura: number, altura: number): Ferramenta;
}

declare var ferramental: FerramentasFactory;

// utilizacao do codigo
var x = ferramental(32, 16);
var y = new ferramental("ferro");
// x e y sao ferramentas
x.ferro();
y.ferro();


