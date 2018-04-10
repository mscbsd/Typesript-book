/* ES6 com funcao seta */
const mamaeEstaFeliz = false;

// Primeira promessa
const vouGanharUmVideoGame = new Promise(
    (resolve, reject) => { // funcao seta
        if (mamaeEstaFeliz) {
            const videoGame = {
                marca: 'X-box One',
                cor: 'preta'
            };
            resolve(videoGame);
        } else {
            const motivo = new Error('motivo: mamãe não esta feliz');
            reject(motivo);
        }

    }
);

// Segunda promessa
const vamosJogar = function (videoGame) {
    const jogar = 'Vamos jogar no meu novo videogame ' + videoGame.marca;
    // Promise.resolve vem do construtor PromiseConstructor.resolve
    return Promise.resolve(jogar);
};

// Invocar nossas promessas
const mamaeFeliz = function () {
    vouGanharUmVideoGame
        .then(vamosJogar)
        .then(muitoFeliz => console.log(muitoFeliz)) // funcao seta
        .catch(error => console.log(error.message)); // funcao seta
};

mamaeFeliz();