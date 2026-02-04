//what are the methods of promises 

//promise.all 
//promise.race
//promise.allSettled
//promise.any

let p1 = new Promise((Resolve, Reject) =>{
    setTimeout(() => {
        Resolve("promise 1 is fullfilled");
    }, 2000);
}
);
let p2 = new Promise((Resolve, Reject) =>{
    setTimeout(() => {
        Resolve("promise 2 is fullfilled");
    }, 3000);
}
);
let p3 = new Promise((Resolve, Reject) =>{
    setTimeout(() => {
        Resolve("promise 3 is fullfilled");
    }, 4000);
}
);

Promise.all([p1, p2, p3]).then((message) =>{
    console.log(message);
}).catch((message) =>{
    console.log(message);
});

Promise.race([p1, p2, p3]).then((message) =>{
    console.log(message);
}).catch((message) =>{
    console.log(message);
});

Promise.allSettled([p1, p2, p3]).then((message) =>{
    console.log(message);
}).catch((message) =>{
    console.log(message);
});

Promise.any([p1, p2, p3]).then((message) =>{
    console.log(message);
}).catch((message) =>{
    console.log(message);
}); 

