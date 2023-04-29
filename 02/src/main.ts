// Types

let infer = "TS is ❤️"

//Explicitly telling that this variable is of type string
let userName : string = "Aakash"; 
let meaingOfLife : number;
let isLoading : boolean;

//Don't use "   " type everytime 
let album : any;

meaingOfLife = 69;
isLoading = true;
album = "Anything"
album = 12



const sum = (a : number, b : number)  => {
    return a + b;
}
const res = sum(3,5) 
console.log(res);