
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
    
    
// example promise all  condition is all promise should be resolve

const p1 = new Promise(resolve => setTimeout(() => resolve('Image 1'), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve('Image 2'), 2000));

Promise.all([p1, p2])
  .then(results => console.log(results)) // ["Image 1", "Image 2"] after 2s
  .catch(error => console.error(error));


//   example 
  function login(username) {
  return new Promise(resolve => setTimeout(() => resolve({id: 1, user: username}), 1000));
}
function getProfile(user) {
  return new Promise(resolve => setTimeout(() => resolve({...user, role: 'admin'}), 1000));
}

login('rahul')
  .then(user => getProfile(user))
  .then(profile => console.log(profile))
  .catch(error => console.error(error));
