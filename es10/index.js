// --> profundidad al array
let array1 = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array1.flat)
console.log(array1.flat(2))

//--> mapea y le se le pasa una funcion al array
let array = [1,2,3,4,5,6,7];

console.log(array.flatmap(value => [value, value*2]));


//--> trimStart/trimEnd elimina los espacios vacios
let hello = '     hello     '

console.log(hello);
console.log(hello.trimStart())

console.log(hello.trimEnd())


//--> Funcion Async (catch) no es necesario pasar el valor error, se puede implementar directamente en le bloque de codigo del catch

try{

} catch {
    error
}

//--> Transformar de arreglos a objetos

let entries = [["name","oscar"],["age",32]];
crossOriginIsolated.log(Object.fromEntries(entries))

let mySymbl = `My Symbol`;
let Symbol = Symbol(mySymbl)