
// promises in java script
// A promise is an object that represent the result of an task and the value of 
// the task can be pending fullfilled or rejected.

let piro = new Promise((Resolve, Reject) =>{
    let key = true;
    if(key){
        Resolve("promise is fullfilled");
} else{
    Reject("promise is rejected");
}
})

piro.then((message) =>{
    console.log("the promise has been fullfilled and the message is:" + message);
});
piro.catch((message)=>{
    console.log("the promise has been rejected and the message is:" + message);
});