const other_number = 123.500
console.log(other_number.toPrecision(3));

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(typeof(balance));

console.log(balance.toString().length);
console.log(balance.toFixed(2));   //fixed to 2 decimal digit

const hundred = 10000
console.log(hundred.toLocaleString('en-IN'));       // put comma 

console.log(Math.abs(-4)); //by using abs u can change the sign

/* 
console.log(Math.round(4.8));
console.log(Math.ceil(4.1));    //always take the highest value
console.log(Math.floor(4.8));  //always take the lowsest value
console.log(Math.min(4.8,5,6,2,1,0,3)); //find the minimum value of array
console.log(Math.max(4.8,5,6,2,1,0,3));  //find max value
 */

console.log(Math.random());  //aways gives value between 0 and 1
console.log((Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)



