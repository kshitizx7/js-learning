// declare objects
// singleton
// // when we declare through literals then the object is not singleton
// // object literals

// const jsUser = {
//     name : "kshitiz",
//     age : 20,
//     city : "Greater Noida",
//     isLoggedIn : true
// }

// console.log(jsUser.age);
// console.log(jsUser.city);
// console.log(jsUser.isLoggedIn);
// console.log(jsUser.name);

// console.log(jsUser["name"]);
// console.log(jsUser["age"]);


// // Adding Symbol in Object
// let sym = Symbol("$");
// let myObj  ={
//     "fullName" : "Kshitiz Sharma   17",
//     [sym] : "myKey1"
// }
// console.log(myObj.fullName);
// console.log(myObj.sym); 

// // change values of objects

// jsUser.name = "Ansh Sharma"
// console.log(jsUser.name);

// // freeze object so that other cant't change it in future using Object.freeze() method
// Object.freeze(jsUser)
// // we can't freeze a particuler key in Object using object.freeze()
// jsUser.name = "ansda"
// console.log(jsUser.name);


// // adding value to Object after it's decleration
// jsUser.email = "Kshitiz.google.com";
// console.log(jsUser);

// //adding function in object
// jsUser.greeting = function() {
//     console.log(`Hello JS User`); 
// }

// jsUser.greeting();

// // this keyword

// jsUser.greeting2 = function() {
//     console.log(`hello Js User,${this.name}`);
// }

// jsUser.greeting2();




