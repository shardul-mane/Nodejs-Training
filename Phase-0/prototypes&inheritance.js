

// in js every things is object  where example  is 
// Prototypes are the mechanism by which JavaScript objects inherit features from one another


 let str = "company";

 str :{


    //  String {

    // }
 }

  console.log(str.__proto__);


//   this an importent line 

  str.__proto__ = String.prototype

//   when  we check  str. we get chartAt .indexOf etc 

//   str. thne we get lot many property of str that are come fromes string __proto__ of Object

//  example of prototype and inheritence


const p1 ={
    name: "maruti" ,
    model: "A34",
    price:45000
}
let p3 ={
    name: "tata" ,
    model: "D34",
  priceofcar : function(){
      console(this.price)
  }
    
}


  const p2 = Object.create(p1); 
//   created an object where property are inherting from p1 obj 
console.log( "  this p2 is using p1 property  ",p2.price)
console.log(" this are  property from p1 ",p1.name);


 p2.__proto__.model = "WSD32";
 
 console.log("   after  property from p1 is changed now  ",p1.model);
 

//   more examples for indepth 

const A1 ={
    xp1 : "this is xp1"
}


const A2 ={
    xp2: "this is xp2",
    __proto__: A1
}

const A3 ={
    xp3 : "this is xp3",
    __proto__:A2
}


console.log("inherit from A2 to A1  ",A2.xp1) // we are take proto of A1 so A2 first look xp1 in self obj then find to its to proto

console.log("inherit from A3to A2 then A1  ",A3.xp1) // in this we have proto of A2 in that proto  we have A1 proto




 









