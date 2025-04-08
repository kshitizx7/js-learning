const user = {
    username : "Kshitiz",
    price : "9999",

    // we can declare function inside object 
    // but we should assign the name of function 
    // as we assign the name of variables inside the object

    welcomeMessage : function() {
        console.log(`hello ${this.username} and price is ${this.price}`);  
    }

}

user.welcomeMessage();

