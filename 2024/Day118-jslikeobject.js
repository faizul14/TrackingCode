// FMP Track Coding Chalenge 2024
// Day 118/366
// https://www.codewars.com/kata/513e1e47c600c93cef000001/

class Animal{
    constructor(type, name){
        this.type = type
        this.name = name
    }

    toSting(){
        console.log(this.type);
        
        return `${this.name} is ${this.type}`
    }

    
}

const dog = new Animal("dog", "Max")
dog.name = "Max2"
console.log(
    dog.type,
    dog.name,
    dog.toSting()
);
