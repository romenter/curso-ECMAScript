function newFunction (name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'ARG';
    console.log(name,age,country);
}

//es6    --> se pueden asignar los valores por defecto
function newFunction2 (name = 'oscar', age =32, country = "ARG"){
    console.log(name,age,country);
}
newFunction2();
newFunction2('Ricardo', 23, 'MXO');

//Template
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);


//---------Clase 3---------------------
// -->    multilinea con comillas francesas
let lorem = "Qui lorem etc etc, lorem ipsu etc etc\n" + " termina la frase aqio"

let lorem2 = `Qui lorem etc etc, lorem ipsu etc etc
 y se puede seguir escribiendo de esta manera`

console.log(lorem)
console.log(lorem2)

// -->    Destructuracion de elementos
let person = {
    'name':'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);

let {name,age,country} = person;
console.log(name,age,country)

// -->
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Mafalda', 'Camila']

let education = ['David', ...team1, ...team2]

// ------ Clase 4 ------------------
let nombre = 'oscar';
let edad = 32;

obj = {nombre: nombre, edad: edad}
obj2 = {nombre, edad}

console.log(obj2)

// --> arrow function

const names = [
    {name:'Oscar', age:32},
    {name:'Tefi', age:22},
]

let listOfNames = names.map(function(item){
    console.log(item.name);
});

let listOfNames2 = names.map (item => console.log(item.name));

// --------Clase 5---------
// -->Clases

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    suma(valorA, valorB){
        this.valueA = valorA;
        this.valueB = valorB;

        return valorA + valorB;
    }
}


//---> import
const calc = new calculator ();
console.log(calc.suma(2,2));

import {hello} from './modulo.js'

// --> generadores

function* helloWorld (){
    if (true) {
        yield 'Hello, ';
    }
    if (true){
        yield 'world';
    }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);