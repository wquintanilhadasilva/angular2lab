var minhaVar = 'minha variavel';

function minhaFunction(x, y){
    return x + y;
}

//ES6 ou ES2015
let num = 2;
const PI = 3.14;

var numeros = [1,2,3];

numeros.map(function(value){
    return value * 2;
});

numeros.map( x => x * 2);

class Matematica{
    soma(x, y){
        return x + y;
    }
}

let x = "asdfadf";
x = 4;

let n1: string = "asdfgh";
n1 = 4;

let n2: any = "asdfgh";
n2 = 4;
