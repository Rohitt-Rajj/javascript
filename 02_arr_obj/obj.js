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

//const obj3 = {obj1,obj2}  // storing obj1 & obj2 in obj 3 
console.log(obj3);

//const obj3 = Object.assign({}, obj1, obj2, obj4)   // here {} means empty target
// Object.assign(target, source1, source2, ...)
const obj3 = {...obj1, ...obj2} //best approach



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
 

// json file format may be object or array
[
    {},
    {},
    {}
]