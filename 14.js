//callback function
//A function passed into another function as an argument, to get called back

function greet(name,callback){
   return  callback(name);
};
function say(name){
    return ("hello"+ name);
}

console.log(greet("Akshay",say));