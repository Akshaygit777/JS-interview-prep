//why we need Callback function?
// callbacks are used to do things when the main gets the response
//  so JavaScript doesn’t have to look for events all the time.
function first (){
setTimeout(function(){
    console.log("first");
},10000);
}

function second(){
    console.log("second");
}
first();
second();
  
  // Logges in order
  // 1. Second 
  // 2. First function called after 10 seconds
