let mamaeEstaFeliz = false;
let vouGanharUmVideoGame = new Promise(
    function (promessaAceita, promessaRejeitada) {
        if (mamaeEstaFeliz) {
            let videoGame = {
                marca: 'X-box One',
                cor: 'preta'
            };
            console.log('mamãe esta feliz e você merece um presente:');
            promessaAceita(videoGame); // promessa aprovada
        } else {
            let motivo = new Error('motivo: mamãe não esta feliz');
            console.log('mamãe não esta feliz e ela vai reclamar bastante:');
            promessaRejeitada(motivo); // promessa rejeitada
        }

    }
);

//console.log(vouGanharUmVideoGame);

let mamaeFeliz = function () {
    //invocando e consumindo a promessa vouGanharUmVideoGame
    vouGanharUmVideoGame
        .then(function (muitoFeliz) {
            console.log('retorna o resultado positivo da promessa:');
            console.log(muitoFeliz);
        })
        .catch(function (error) {
            console.log('retorna o resultado do não cumprimento da promessa:');
            console.log(error.message);
        });
};
// invocando a funcionalidade mamaeFeliz
mamaeFeliz();