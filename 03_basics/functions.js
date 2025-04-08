// ... is a rest operator to send multiple values into one single array


// function cartSum(...num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum += num[i]
//     }
//     return sum;
// }

// let paisa = cartSum(100,200,300,400,500);

// console.log(paisa);

 
//Object in function

function handleObject(obj) {
    console.log(`Username ${obj.UserName} and price is ${obj.price}`)
}

const obj =  {
    UserName : "Kshitiz Sharma",
    price : 1700
}

// handleObject(obj);
// handleObject({
//     UserName : "Ansh",
//     price : "120000"
// })

function handelArray(myArr) {
    for(let i=0; i<myArr.length; i++) {
        console.log(myArr[i]);
    }   
}
myNewArray = [100,200,300,400,500];
handelArray(myNewArray)