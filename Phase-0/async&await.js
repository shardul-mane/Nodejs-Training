

 // it tell the function is anyscrous and it sure return an promise 
 // if he return the value then still it value wrappe under the promise and give it 

//  example of async


 function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Resolved value');
    }, 2000);
  });
}

async function getAsyncData() {
  console.log('Calling the async function...');
  const result =  resolveAfter2Seconds(); 
  console.log(result); 
  // Outputs: promise object 
 
}

getAsyncData();


 // await is key word where we have to wait 

//  example for  await

 function resolveAfter5Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Resolved value');
    }, 5000);
  });
}

async function getAsyncData() {
  console.log('Calling the async function...');
  const result =  await resolveAfter5Seconds(); //  until the promise resolves
  console.log(result); // Outputs: Resolved value
  console.log('Execution resumed and finished.');
}

getAsyncData();


// async and await is use to handle the promise  with  complex logic how it run internally


function promisefun() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Resolved value');
    }, 5000);
  });
}

async function getAsyncData() {
   console.log("the before pormise hello");
   const P1 = await promisefun() ;
   console.log(P1)

   console.log("after promise 1 this line ");
   const P2 = await promisefun();
   console.log(P2)

}

getAsyncData();

