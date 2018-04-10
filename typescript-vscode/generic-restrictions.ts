interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  
    // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity(3);  
// Error, number doesn't have a .length property

loggingIdentity({length: 10, value: 3});