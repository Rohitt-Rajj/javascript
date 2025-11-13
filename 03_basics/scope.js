//  {} is known as Scope
// avoid var because it is 


//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}


// ++++++++++++++++++ interesting ++++++++++++++++++

// both are the way to declare  a function


console.log(addone(5))      // here you can print function before assigning

function addone(num){
    return num + 1
}




//  console.log(addTwo(5))   you can not access this before assinging the function like this
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))      // u have to use like this 