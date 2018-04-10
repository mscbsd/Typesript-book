class Person{
    constructor(name){
        console.log(name + " Person constructor");
        
    }
    getID(){
        return 10;
    }
}

class Employee extends Person{
    constructor(name){
        super(name);
        console.log(name + " Employee constructor");
        
    }
   
}

let e = new Employee("Marcelo");
console.log(e.getID());