//currying function//
//A function that takes multiple arguments one at a time is called a currying function.

 function addd(a,b){  //normal function
    return a+b;
    };
   console.log(addd(2,3));
    
//currying function
function add(a){
    return function(b){
        return a+b;
    }
};
console.log(add(2)(3));
