

// the closures are  function inside function in this where it remeber it outer lexical scope varibales 
// in this after our outer function exicute still we have acces of variables


function outerone(){
    let temp= 9;
    function innerone(){
        console.log(` the number is ${temp}`);
    }

    return innerone;

}
const ans = outerone();
ans()


// example 2 
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(24);
console.log(double(567)); 





