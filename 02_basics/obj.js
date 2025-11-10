// both are the way to declear objects 
const tinderuser1 = new Object()  
const tinderUser ={}  //you can’t use a variable before defining it.

console.log(tinderUser)


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: "a", 2: "b"}   //1 is key and 2 is value
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {obj1,obj2}
console.log(obj3);
