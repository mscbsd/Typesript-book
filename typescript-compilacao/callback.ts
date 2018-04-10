function aguardaSoma(x: number, y: number, (soma: number) => void): void;

aguardaSoma(3, 4, soma => console.log("x = " + x));