
// in this we are using object in that if we  function if wanted that specific functionality 
// using different values of object then we use call methode


 let username ={
 firstname: "rahi",
 lastname:"patil",
fullname : function(){
    console.log(` name is ${this.firstname} ${this.lastname}`)
}
 }


 let user1 ={
 firstname: "rahi",
 lastname:"patil",
fullname : function(){
    console.log(` name is ${this.firstname} ${this.lastname}`)
}
 }
 
 user1.fullname();
 
 const user2 ={
 firstname: "raj",
 lastname:"shinde"
 }
 
 user1.fullname.call(user2);
 
 
//  example 2  of call 

const car1 ={
    name: "maruti" ,
    model: "A34",
    price:45000
}
const car2 ={
    name: "tata" ,
    model: "D34",
    price:75000
}

let carinfo = function (colour,location){
    console.log(`name is ${this.name} model is ${this.model} price is ${this.price} and colour is ${colour} and location ${location}`);
    
}

carinfo.call(car1,"red","chennai");

carinfo.call(car2,"orange","delhi");



// in apply we can pass multiple agruments in from of array as per our customization
// call vs apply  how way we can pass the arguments. 
//  example of apply
carinfo.apply(car1,["bule","mumbai"])

// bind methode is same as call but it bind. the function with object 
//  give the copy of that method
// / we can  call multiple times 

// example of bind 
 const car1info = carinfo.bind(car1,"white","navi mumbai");
 car1info();
 
 car1info()
