
// the promise an object it gives result of promise it have three state pending ,fulfill,rejected




// const mypromise  = new Promise(re)
const mypromise = new Promise((resolve,reject)=>{
  let x =2;
    setTimeout(() => {
         if(x==2){
              console.log("promise is resloved");
              resolve();
         }else{
            console.log("rejected");
            reject();
         }
       

        
    }, 1000);



})
// console.log(mypromise)
mypromise.then(()=>{
    let er =567;
    console.log("hi from then")
    
}).catch(()=>{
    console.log("hi from catch")
})
    
    
