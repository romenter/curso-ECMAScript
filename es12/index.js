const string = 'JavaS es maravilloso (estoy de acuerdo) con JavaS puedo crear el futuro de la web';

const remplaceString = string.replace("JavaS","Python");
const remplaceString1 = string.replaceAll("JavaS","Python");

console.log(remplaceString)
console.log(remplaceString1)

// --> Metodo Privado #
class Message { 
    #show(val){           //--> solo se puede acceder dentro de la clase
        console.log(val)
    };
    get #add(val){
      ...
    }
}

//-->Promise array -> captura la primera respuesta que sea satisfactoria
const promise1 = new Promise((resolve, reject) => reject("1"))
const promise2 = new Promise((resolve, reject) => reject("2"))
const promise3 = new Promise((resolve, reject) => reject("3"))

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response))

 //--> WeakRef --> Evita que el recolector de basura recoga elementos (liberando espacio)
 //--> Nos asegurara que la porcion de codigo que necesitamos permanecera en memoria

class AnyClass {
    constructor(element){
    this.ref = new WeakRef(element)
    }
    { ... }
}

//--> nuevos operadores logicos
let isTrue = True;
let isFalse = False;
console.log(isTrue &&= isFalse);



console.log(isTrue ||= isFalse);


console.log(isTrue ??= isFalse);