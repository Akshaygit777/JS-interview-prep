// diff between call apply bind

// All these methods are used to invoke a function with a given/provided
//  object so these functions can use this keyword.

function greet(msg) {
    console.log(msg + " " + this.name);
  }
  
  const user = { name: "Alex" };
  
  greet.call(user, "Hi");      // call
  greet.apply(user, ["Hi"]);   // apply
  const sayHi = greet.bind(user, "Hi");
  sayHi();                     // bind
  
