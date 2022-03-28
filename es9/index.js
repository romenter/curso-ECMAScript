const obj = {
    name: 'Oscar',
    age: 32,
   
};

let {
    name, ...all
} = obj;

// --> Unir objetos

const obj1 = {
    ...obj,
    country: 'MX'
} 


//--> Promise.finaly

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? resolve ('hello world')
        : reject (new Error ('test error'))
    })
};

helloWorld ()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=>console.log('Finalizo'))

// Mejoras
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match [1]
const month = match [2]
const day = match [3]

console.log(year,month,day);