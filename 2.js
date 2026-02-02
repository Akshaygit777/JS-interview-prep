//what is hoisting
//It’s the behavior of JS to move all the variable, object & functional declarations to the top of the file.
    // How Hoisting Works?
    console.log(number)
    var number = 5
    // Above line JS engines takes as 
    var numbers = undefined
    console.log(number) // Till this point number is by default(Due to hoisting) has undefined value.
    number = 5
