declare namespace musica {
  function ouvir(): void;
}

declare module "musica" {
    export = musica;
}

import sucesso = require("musica");
sucesso.ouvir();
// ou alternativamente
musica.ouvir();