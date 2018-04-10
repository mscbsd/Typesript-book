interface cachorro {
    (raca: string): cachorro;
    new (raca: string): cachorro;

    raca: string;
    late(): void
}

declare var cachorro: cachorro;

export = cachorro;