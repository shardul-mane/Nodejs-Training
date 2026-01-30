

//  promise all 

const { setDefaultResultOrder } = require("dns")


const promise1 = new Promise((resolve,rejects)=>{
    resolve("promise 1 is resolve")
})

const promise2 = new Promise((resolve,rejects)=>{
    resolve("promise 2 is resolve")
})

const promise3 = new Promise((resolve,rejects)=>{
    resolve("promise 3 is resolve")
})
 Promise.all([promise1,promise2,promise3]).then((val)=>{
    console.log(val);
    console.log("all promise get sucess that only this execute if any fail then immdetaily it will show fail");

 })

//  promise all setelled

const promise11= new Promise((resolve,rejects)=>{
    resolve("promise 1 is resolve")
})

const promise22= new Promise((resolve,rejects)=>{
    rejects("promise 2 is rejects")
})

const promise33= new Promise((resolve,rejects)=>{
    resolve("promise 3 is resolve")
})
 Promise.allSettled([promise11,promise22,promise33]).then((val)=>{
     val.forEach((output)=>{
         console.log(output)
         console.log(output.status)
         
     }) 
    console.log("all promise get excuted then it  if some is fail still it find but it will wait until all are setteled");

 })

//  promise race who reslove first that will give return 

const promise123 = new Promise((resolve,rejects)=>{
    resolve("promise 1 is resolve")
})

const promise124= new Promise((resolve,rejects)=>{
    rejects("promise 2 is rejects")
})

const promise125= new Promise((resolve,rejects)=>{
    resolve("promise 3 is resolve")
})

Promise.race([promise123,promise124,promise125]).then((val2)=>{
   console.log(val2);
})

