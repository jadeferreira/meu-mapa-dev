class Person{
    constructor(name){
        this.name = name;
    }

    sayMayName(){
        return `Hello, my name is ${this.name}`;
    }

}

module.exports = {
    Person,
};