// const user = {
//     username : "Kshitiz",
//     price : "9999",

//     // we can declare function inside object 
//     // but we should assign the name of function 
//     // as we assign the name of variables inside the object

//     welcomeMessage : function() {
//          console.log(`hello ${this.username} and price is ${this.price}`);
//         console.log(this);  
//     }
// }
// user.username = "Ansh";
// user.price = 1200000;
// user.welcomeMessage();

//when we print "this" in the empty node enviorment it print empty curly braces 
// and when we print this keyword in browser then that shows window
// because the global object in browser in window 
// and here in node enviorment its empty object

// console.log(this);




//this only work in object not in functions 

// function chai() {
//     const username : "Kshiitz";
//     console.log(this.username);
// }

// chai();

// const chai = function() {
//     const username = "Kshitiz Sharma"
//     console.log(this.username);
// }
// chai();


// Arrow function SYntax

//explicit return
// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }
//
// console.log(addTwo(12,5));

//implitcit return
//in implicit return there is no need for return statement
// const addTwo = (num1,num2) => (num1 + num2);

// console.log(addTwo(12,5));
