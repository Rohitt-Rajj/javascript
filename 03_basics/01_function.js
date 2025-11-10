function saymyname(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}
saymyname();



function addTwoNumber(num1 , num2){
        //console.log(num1 + num2);
        return num1 + num2
        
}
//addTwoNumber(3,5);
const result = addTwoNumber(3,5)
console.log("Result: ", result);  


function login(userinput){
    if(userinput == undefined){
        return `Please enter username`
    }
    return ` ${userinput} just logged in`
}
console.log(login('rohit'));



function calculatecartPrice(...nums1){  //  ... is known as rest or spread operator
    return nums1

}
console.log(calculatecartPrice(100,200,300));



const userDetails = {
    username: "Rohit",
    age: 21
}

function userDetail(anyobject){
console.log(`User name is ${anyobject.username} and their age is ${anyobject.age}`);
}

userDetail(userDetails);



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));