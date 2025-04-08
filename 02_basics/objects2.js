//Non singleton Object

// const newUser = new Object();

// newUser.name = "Kshitiz"
// newUser.age = 20

// console.log(newUser);


// object in object
// newUser.address = {
//     country : "India",
//     State : "UP",
//     city : "Bijnor",
//     pincode : "246732"
// }

// console.log(typeof newUser.address);

// object in object in object
// newUser.address.exactAddress = {
//     location : "Nangal Soti , Bijnor, near telephone exchange"
// }
// console.log(newUser.address.exactAddress.location);

// merging 2 or more objects to make a new object

// let obj1 = new Object();
// let obj2 = new Object();
// obj1 = {
//     'a' : 1,
//     'b' : 2,
//     'c' : 3
// }
// obj2 = {
//     'd' : 4,
//     'e' : 5,
//     'f' : 6
// }

// let mergedObj = new Object();
// objects are merged as we merge ARRAYS by using the SPREAD OPERATOR or using the Object.assign(target,source1,source2) METHOD
//mostly used
// mergedObj = {...obj1,...obj2};  
// mergedObj = Object.assign({},obj1,obj2);
// Object.assign(mergedObj,obj1,obj2);
// console.log(mergedObj);

// Objects in Array
// const myObjectArr = [
//     {
//         id : 1111,
//         email : "ks@gmail.com"
//     },
//     {
//         userNum : 98989898989,
//         userCountryCode : "+91"
//     }
// ]
// myObjectArr[1].email = "as@gmial.com";
// console.log(myObjectArr[1].email);

// Store keys and value of a Object in an Array

const myUser =  {
    name : "Kshitiz",
    age : 20,
    city : "Greater Noida",
    isLoggedIn : true,
    email : "ks@gmail.com",
    phone : 9898989898,
    country : "India",
    state : "UP",
    pincode : 246732
}

// let keysArr = Object.keys(myUser);
// let valueArr = Object.values(myUser);

// console.log(keysArr);
// console.log(valueArr);

//convert every key value pair in array

// let entryArr = Object.entries(myUser);
// console.log(entryArr);


//check whether this key exists or not
// console.log(myUser.hasOwnProperty('age'));
 

// destructuring of objects

//usaual syatax
console.log(myUser.name);

// destructure object
const {name : i} = myUser;
console.log(i);

