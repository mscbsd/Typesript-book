import * as RX from '@reactivex/rxjs/dist/cjs/Rx';

let Observavel = RX.Observable;

//var xhr = new XMLHttpRequest();

function procuraNaWikipedia(procura) {
    let capturarUrl = Observavel.ajax('https://pt.wikipedia.org/w/api.php?action=opensearch&search=' + encodeURI(procura) + '&format=json')
        .subscribe(
        function (data) {
            return data;
        });
    console.log(capturarUrl);
}

let resultadoWiki = procuraNaWikipedia('typescript');
// resultado da pesquisa
console.log(resultadoWiki);