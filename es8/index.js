const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//object values
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}
const values = Object.values(data);
console.log(values);
console.log(values.leght);

//padding
const string = 'hello';
console.log(string.padStart(20,'hi'));
console.log(string.padEnd(20, '-'));
console.log('food'.padEnd(20, '='));

//async await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

//other example
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
};

anotherFunction();