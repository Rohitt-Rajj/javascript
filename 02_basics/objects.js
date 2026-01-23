// singleton made by constructor
// Object.create -> constructor method

// symbol in js 
const mysym = Symbol("key1")


// object literals

const jsuser = {
    name: "Rohit",
    "full name" : "Rohit Raj",
    age : 22,
    location: "phagwara",
    email : "example@gmail.com",
    lastLoginDays : ["monday","saturday"],
    [mysym] : "mykey1"
}
console.log(jsuser);
console.log(jsuser["name"]);  // u have access like this ["name"]  bcz js taking as a string
console.log(jsuser["full name"]);  // u can only acess by using [brackets]
console.log(jsuser[mysym]);  //output -> mykey1 

jsuser.email = "example.com"
console.log(jsuser["email"])
Object.freeze(jsuser[email])
jsuser.email = "example.com"
console.log(jsuser["email"])



