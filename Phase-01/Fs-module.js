

// const fs = require('fs');


 // fs module is use to read the file in this syncronous code is there so we use readFileSync 
 //  so after reading whole file then control move to next line 
const fs = require('fs');
// Program waits here until file is read
const data = fs.writeFileSync('test1.txt', "this test 1 file");
// console.log(data);
console.log(' after reading whole file this is run Done!'); // Only prints after file is read
 

//  for sync task for this it return the result but for aysnc it will not 

// read info of  file syncronus 
// fs.readFileSync('test1.txt','utf-8')
const syncronousfile = fs.readFileSync('test1.txt','utf-8');
console.log(syncronousfile);



// add info to our file syncronus
 fs.appendFileSync("test1.txt",'this wanted append ')

// over write file sync
fs.writeFileSync("test1.txt",'utf-8');

// to copy our file and put into new file 
fs.cpSync("test1.txt",'newtest.txt')

// we use unlink to delete the file 
fs.unlinkSync("newtest.txt")

 // for stattastics of file

 const stat = fs.statSync("test1.txt");
 console.log(stat)

//   fs module Async it will expect the call backfuntion
// example 


//  code snippet 2 
fs.readFile('test1.txt','utf-8',(err,result)=>{
      if(err){
        console.log("the error is ", err);
      }else{
        console.log(result);
      }
})


// write linnein async

fs.writeFile('test1.txt',"new line ");
