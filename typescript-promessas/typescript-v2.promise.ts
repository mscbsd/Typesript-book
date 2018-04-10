let mamaeEstaFeliz = true;
let vouGanharUmVideoGame = new Promise(
    function (promessaAceita, promessaRejeitada) {
        if (mamaeEstaFeliz) {
            let videoGame = {
                marca: 'X-box One',
                cor: 'preta'
            };
            promessaAceita(videoGame); // promessa aprovada
        } else {
            let motivo = new Error('motivo: mamãe não esta feliz');
            promessaRejeitada(motivo); // promessa rejeitada
        }

    }
);

let vamosJogar = function (videoGame) {
    return new Promise(
        function (aceitar) {
            let jogar = 'Vamos jogar no meu novo videogame ' + videoGame.marca;
            // retorna apenas o cumprimento da promessa
            return aceitar(jogar);
        }
    );
};

let mamaeFeliz = function () {
    //invocando e consumindo a promessa vouGanharUmVideoGame
    console.log('Antes de verificarmos a promessa vouGanharUmVideoGame');
    vouGanharUmVideoGame
        .then(vamosJogar) // encadeiamento da promessa vamosJogar
        .then(function (muitoFeliz) {
            console.log('retorna o resultado positivo da promessa:');
            console.log(muitoFeliz);
        })
        .catch(function (error) {
            console.log('retorna o resultado do não cumprimento da promessa:');
            console.log(error.message);
        });
    console.log('Depois de verificarmos vouGanharUmVideoGame');
};
// invocando a funcionalidade mamaeFeliz
mamaeFeliz();