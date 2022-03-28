// -->Dinamic import
const button = document.getElementById("btn")

const aBigNumber = 9999999999999999n;
const BigNumber = BigInt(999999999999999999);

console.log(aBigNumber)
console.log(BigNumber)

//--> Promise all Settled
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => reject("resolve"));
const promise3 = new Promise((resolve,reject) => reject("resolve 1"));

Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response)) 

//--> Operador Null ??
const fooo= null??"Default String";

//-->Optional chaining (?.)
const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email')
}else{
    console.log('fail')
}