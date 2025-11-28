const user = {
    username:"ROhit",
    price : 999,

    WelcomeMessage : function(){
        console.log(` ${this.username} , Welcome to our website`);
        console.log(this)    //this refers to the current object that is calling the function
        
    }
}

/*
user.WelcomeMessage();
user.username = "sam";
user.WelcomeMessage()
console.log(this);   // here this is {} null
*/




/*
function chai(){
   let username = "Rohit singh"
   console.log(this.username); // undefined u can not call inside function
   

}
chai();
*/




/*
const chai = function(){            // you can use function also like this 
    let username = "Rohit singh"
   console.log(this.username);      //this refers to the current object that is calling the function
}
chai()

*/






/*
this is arrow function => Arrow function is a shortest way of writing functions.

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai()

*/





/*
const addTwo  = (num1,num2) =>{        
    return num1+num2
}
console.log(addTwo(2,3));
*/



/*
+++++++++++++++++++++++++++++++++  Implicit function   ++++++++++++++++++++++++++++++++++++++++++
if u use {} bracket then u have to use return function

const addTwo  = (num1,num2) => (num1+num2);
console.log(addTwo(3,4));
*/


