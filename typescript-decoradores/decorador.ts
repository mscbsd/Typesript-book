function decorador(constructor: Function) {
    // seal é um objeto nativo Typescript que define uma propriedade selada
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}