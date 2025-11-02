const  name = "rohit "
const repoCount = 50
console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(name[0]);       // u can access the 0 index or 0 key value pair like this 
console.log(name.length);
console.log(name.toUpperCase()); //value change to ROHIT but original value remane same
console.log(name.charAt(2));        // return which char is present at index 2
console.log(name.indexOf("i"));     //return index of i (3)
console.log(name.substring(0,3));   // return index from 0 to 3 which is roh   u can not use negative value here 

const value = "hi-my-name-is rohit"
console.log(value.slice(-5,20));            // u can use the negative value in the slice 

const new_string = "      rohit    ."
console.log(new_string.trim());     // trim remove the extra space before or after the value 


const url = "https://rohit.com/rohit%123singh"
console.log(url.replace('%123','-'));       // it replace the %123 to -

console.log(url.includes('hi')); // return true bca in rohit ,hi is present 

console.log(value.split(','));






