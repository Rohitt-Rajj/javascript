/*
var:-  Function scoped, Can redeclare ,Can update, Avoid using, Hoisted

let:-  Block scoped, Cannot redeclare, Can update, Best for changing values

const:- Block scoped, Cannot redeclare , Cannot update , Best for fixed values

*/

let score = "33"
console.log(typeof score)

// convert string to number
let valueInNumber =  Number(score)
console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let conversion = Boolean(isLoggedIn)
console.log(typeof conversion)
console.log(conversion)

// "" => false
// "Rohit" => true


let someNumber = 33
let strigNumber =  String(someNumber)

console.log(strigNumber);
console.log(typeof strigNumber);


// **********************************  operations **************************************


let value = 3
let negValue = -value;
console.log(negValue);


console.log(2 + 2);
console.log(2 - 2);
console.log(2 / 2);
console.log(2 * 2);


let str1 = "hello"
let str2 = " rohit"

let str3 = str1 + str2
console.log(str3);



console.log("1" + 2);  // 12
console.log(("1" + 2+2));  //122 bcz there is strign in the staring "1"
console.log((3 + 1 + "1"));  //41 , there is number in starting
// if string is first then all treated as a string

console.log(+true); // 1 

let scoreGame = 101 
scoreGame++;
++scoreGame
console.log(scoreGame);







