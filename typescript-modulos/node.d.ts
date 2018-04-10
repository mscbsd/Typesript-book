declare module "url" {
    export interface Url {
        protocolo?: string;
        nomeSite?: string;
        caminhoInterno?: string;
    }

    export function parse(urlStr: string, queryString?, separadores?): Url;
}

declare module "caminho" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
}