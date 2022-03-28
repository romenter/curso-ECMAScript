
const data = {
    fronted: 'Oscar',
    backend: 'Isablel',
    design: 'Ana',
}
//¿Como transformo el objeto en matriz?

const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)

//--> Object values
const data1 = {
    fronted: 'Oscar',
    backend: 'Isablel',
    design: 'Ana',
}

const values = Object.values(data1);
console.log(values)

// --> Padding
const string = 'Hello'
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(7,'hi'))

// --> Async y Await

const helloWorld = () => {
    return new Promise ((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('Hello World', 3000))
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld ();
  
    console.log (hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error)
    }
};

anotherFunction();