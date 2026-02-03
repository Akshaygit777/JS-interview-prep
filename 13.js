//closure//
//Function remembers its enviroment and have accesss to it.

function outer(){
    let count = 0;
    return function inner(){
        count++;
        return count;
    }
}
console.log(outer()());