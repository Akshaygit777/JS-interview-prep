// what is memoization
// A technique used to optimize the performance of functions by caching the results of previous
// functions calls.

// if is do not exist in cache then we calculate it ,return it and store in cache for next time.

let memo  = () => { 
    let cache = {};
    return value => {
    if(value in cache){
        console.log("from cache");
        return cache[value];}
        else{
            let result = value + 20;
            console.log("calculating result");
            cache[value] = result;
            return result;
        }

}};
const result = memo();
console.log(result(20)); // calculated
console.log(result(20)); //cached 