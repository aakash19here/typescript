//How a object should look like | A custom type and not a blueprint
//Used to typecheck

interface Person {
    name : string;
    age : number;
    greet(phrase : string) : void;
}

let user1 : Person;

user1 = {
    name : "Aakash",
    age : 13,
    greet(phrase : string){
        console.log(phrase + ' ' + this.name)
    }
} 

user1.greet("Hi there ,")
