export default class DefaultCepValidador {
    static numberRegexp = /^[0-9]+$/;
    ehValido(s: string) {
        return s.length === 8 && DefaultCepValidador.numberRegexp.test(s);
    }
}