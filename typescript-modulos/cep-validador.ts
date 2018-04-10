// expressao regular para pegar somente numeros
export const numberRegexp = /^[0-9]+$/;

class CepValidador implements StringValidador {
    ehValido(s: string) {
        // tem que ter 8 numeros
        return s.length === 8 && numberRegexp.test(s);
    }
}

export { CepValidador };
export { CepValidador as principalValidador };