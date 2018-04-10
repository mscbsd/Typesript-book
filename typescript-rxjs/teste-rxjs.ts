import * as RX from '@reactivex/rxjs/dist/cjs/Rx';

let Observavel = RX.Observable;

// Observar multiplos valores
let observarValores = Observavel.of('valor1', 'valor2');
console.log('Resultado de observarValores');
console.log(observarValores);

// Observar um array
let observarArray = Observavel.from(['a',1,2,'b']);
console.log('Resultado de observarArray');
console.log(observarArray);

/*
// Observar um evento
let observarEvento = Observavel.fromEvent(document.querySelector('button'), 'click');

//Observar uma promessa
let observarpromesa = Observavel.fromPromise('nome-da-promessa');

// Observar um retorno
let observarRetorno = Observavel.bindCallback('nome-da-funcao-de-retorno');

// Observar todo o nó de uma funcao de retorno
let observar = Observavel.bindNodeCallback('nome-da-funcao-de-retorno');

// Observar o retorno ajax
let capturarUrl = Observavel.ajax('endereço de uma url');
*/