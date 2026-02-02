// -high order function// 
// function that takes another function as an argument or returns a function as a result or both.
function greet(name) {
    return "Hello " + name;
  }
  
  function saySomething(fn) {
    return fn("Akshay");
  }
  
  console.log(saySomething(greet));

    // Example of a higher-order function that returns a function

  function greet1(){
    return function(name){
        return "hello " + name;

    }
  };
const g = greet1();
  console.log(g("Akshay"));

    // Example of a higher-order function that do both.

  function operate(fn) {
    return function (a, b) {
      return fn(a, b);
    };
  }
  
  function add(x, y) {
    return x + y;
  }
  
  const addOperation = operate(add);
  console.log(addOperation(2, 3)); 


  