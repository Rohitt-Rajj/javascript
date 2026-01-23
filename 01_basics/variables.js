const accountId = 12345        
// const  declare a constant variable, its value cannot be reassigned after its initial declaration.

let accountEmail = "ranarohit.example@gmail.com"
// let have Block Scope

var accountPassword = "12345"
// Variables declared with the var always have Global Scope.
// prefer not to use var because of issue in block scope & functional scope

accountCity = "jaipur"
// u can declare a variable like also but do not use.

let accountState;   // undeifined 

accountEmail = "hshd@gmsil.com"
accountPassword = "544662"
accountCity = "bihar"

console.log(accountEmail)
console.table([accountState, accountPassword,accountEmail,accountCity])