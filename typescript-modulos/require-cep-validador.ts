let numberRegexp = /^[0-9]+$/;
class RequireCepValidador {
    ehUmCep(s: string) {
        return s.length === 8 && numberRegexp.test(s);
    }
}
export = RequireCepValidador;