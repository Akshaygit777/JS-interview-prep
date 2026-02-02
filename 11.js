//IIFE function//
//An IIFE(Immediately Invoked Function Expression) is a function that runs as soon as it is defined.
(function(){
    console.log("This is an IIFE function");
})();

//Example of IIFE with parameters
(function(name){
    console.log("Hello " + name);
})("Akshay");