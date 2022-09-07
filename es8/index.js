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
