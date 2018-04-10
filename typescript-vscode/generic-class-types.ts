function create<T>(c: {new(): T; }): T {
    return new c();
}