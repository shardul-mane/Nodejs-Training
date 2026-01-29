

//  scope types 
//  global scope   it is an outer most excution context 
// example 
 var a = 245;

// local scope  it  also called functional scope  
// example 
 function fun23(){

}
// lexical scope. it acess of his paraent function   scope 
// example 
function paraent1(){
    let pp = 34;
    function child1(){
        console.log(pp)
    } 
}
// block scope  { } it is denoted by this in this differen  way work for var vs let vs const 
 var root1 = "hi"
{
let root2 =7567;

const root3 = "yui";
}

// hoisting means

//  in js let and const are hoisted 
// they use temporal dead zone until they get value to be assinge
 // for function are also hoisted 
 // let and const hoisted but for  time b 
// example 1

console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5


// example 2 
test1();
function test1(){
    console.log("hi")
}

// print correctly hi

// example 3 

let sayhi = function test2(){
    console.log("hi")
}
//  gives error 


// example 4 
// for let and const 

console.log(b); // ReferenceError
let b = 10;




 


