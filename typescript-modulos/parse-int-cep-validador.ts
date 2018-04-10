export class ParseIntCepValidador {
    ehValido(s: string) {
        return s.length === 8 && parseInt(s).toString() === s;
    }
}

export {CepValidador as RegExpCepValidador} from "./cep-validador";