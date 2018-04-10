function f() {
    console.log("f(): avaliado");
    return function (alvo: Object, propriedade: string, descritor: PropertyDescriptor) {
        // PropertyDescriptor é uma interface nativa do typescript
        console.log("f(): chamado");
    }
}

function g() {
    console.log("g(): avaliado");
    return function (alvo: Object, propriedade: string, descritor: PropertyDescriptor) {
        // PropertyDescriptor é uma interface nativa do typescript
        console.log("g(): chamado");
    }
}

class C {
    @f()
    @g()
    method() {}
}