let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(3));

//flat map
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//trim start
let hello = '         hello world';
console.log(hello);
console.log(hello.trimStart());

//trim end
let hello = 'hello world        ';
console.log(hello);
console.log(hello.trimEnd());

try {

}catch {
    error
}

//
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

//
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);




