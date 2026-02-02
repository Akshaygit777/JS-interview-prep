//diff btw let and const
//The difference between let and const

//let is used when we have to change the value of a variable declared.
//With const, we can’t modify it once a variable is declared.

// A. let
let number = 5
number = 6 // Works

// B. const
const anotherNumber = 5
anotherNumber = 6 // Error | TypeError: Assignment to constant variable.

// Note
// Both let & const keyword were introduced in ES6.
