// what is setTimeout and setInterval?
// setTimeout calls the function once after a periods of time.
// setInterval calls the function repeatedly after a periods of time.

setTimeout(function () {
    console.log("I'm a callback function"); // Logs after 2 second
  }, 2000); 

setInterval(function () {
    console.log("I'm a callback function"); // Logs after every 2 second
  }, 2000);