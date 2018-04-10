/* código TypeScript usando async e await da especificacao es7 */
const mamaeEstaFeliz = false;

// Primeira promessa
const vouGanharUmVideoGame = new Promise(
    (mamaeFicouFeliz, mamaeNaoFicouFeliz) => {
        if (mamaeEstaFeliz) {
            const videoGame = {
                marca: 'XBox',
                cor: 'Preto'
            };
            mamaeFicouFeliz(videoGame);
        } else {
            const motivo = new Error('motivo: mamãe não esta feliz');
            mamaeNaoFicouFeliz(motivo);
        }

    }
);

// Segunda promessa
async function vamosJogar(algumVideoGame) {
    return new Promise(
        (podemosJogar) => {
            const jogar = 'Vamos jogar no meu novo videogame ' + algumVideoGame.marca;
            podemosJogar(jogar);
        }
    );
};

// Invocar nossas promessas
async function mamaeFeliz() {
    try {
        console.log('Antes de saber se vou ganhar o videogame');

        let esperoGanhar = await vouGanharUmVideoGame;
        let queremosJogar = await vamosJogar(esperoGanhar);

        console.log(queremosJogar);
        console.log('Depois de saber se vou ganhar o videogame');
    }
    catch (error) {
        console.log(error.message);
    }
}

(async () => {
    await mamaeFeliz();
})();