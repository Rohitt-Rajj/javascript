/* javaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
 */


const myArr=[1,2,3,4,5,6]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(7,8,9,0)
//console.log(myArr[1]);

myArr.push(0,45)
//  console.log(myArr);
myArr.pop()   //remove the last value 
// console.log(myArr);

myArr.unshift(9)  //it add the element in the starting of array
//console.log(myArr);

myArr.shift()
//console.log(myArr);

console.log(myArr.includes(9));  // return value in true or false 
console.log(myArr.indexOf(3));   // gives index of 3 

const Array1 = [11,12,13,14,15,16]
const newArray = Array1.join()  // convert array to sting 
console.log(newArray);
console.log(typeof newArray);



// slice -> end not included where start and end represent the index of items in that array. 
//  splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

