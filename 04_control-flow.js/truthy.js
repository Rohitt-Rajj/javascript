const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values
// "0", 'false', " ", [], {}, function(){}



// if (userEmail.length === 0) {  ///  === also chek the data types 
//     console.log("Array is empty");
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10     //return 5 bcz 5 comes first
// val1 = null ?? 10   // return 10 bcz null is at the first
// val1 = undefined ?? 15   // return 15
val1 = null ?? 10 ?? 20    // return 10




console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")