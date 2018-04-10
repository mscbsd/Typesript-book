namespace animaisFactory {

    interface AnimalOptions {
        name: string;
        height?: number;
        weight?: number;
    }
        function create(name: string, animalOptions?: AnimalOptions): Animal;
}


animaisFactory.create("dog");
animaisFactory.create("giraffe", { name: "ronald" });
animaisFactory.create("panda", { name: "bob", height: 400 });
// Invalid: name must be provided if options is given
//animalFactory.create("cat", { height: 32 });