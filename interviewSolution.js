
//approach 01 

const users={
    rahi :23,
    rahul : 12,
    priya: 34
};
const adults=[];
for(let key in users){
   if( users[key]>=18){
    adults.push(key)
   }
}
console.log(adults)

//  aaproch 02
//  using entries of Object method

