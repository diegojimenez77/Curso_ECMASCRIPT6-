// Promises example
const helloPromise = () => {
    return new Promise((resolve, reject) => {
       if (false) {
        resolve('Hey!');
        } else {
           reject('Ups!!!');
        }
       });
    }
   
   helloPromise()
       .then( response => console.log(response))
       .then(() => console.log('hola'))
       .catch(error => console.log(error));

// Clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

import {hello} from './module';

hello();

//Generators
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
    if (true) {
        yield 'Webos!';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
