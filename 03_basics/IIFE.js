// Immmidately invoked Function Expression
//(this represent the function defination)(this represent function call);
// to remove the pollution of global scope we use IIFE functionwhy we use iife


//Since an IIFE is executed immediately after its definition,
//  it is useful for initializing code or creating a one-time setup 
// without leaving behind any residual variables or functions.


//this is a named iife
(function chai() { console.log(`your Chai is ready !`)  }) (/*call for function*/);

//ALways use semicolon to end IIFE function else it will give an error
// simple iife
( () => (console.log("need some cookies")) ) (/* function call */);

//IIFE with parameter

((num1,num2)=>(console.log(`sum is : ${num1+num2}`))) (100,-83);
