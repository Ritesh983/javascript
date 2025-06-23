const user={
    username:"Ritesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`); 
        console.log(this);         
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this); here 'this' will print empty context{} while in browser shows window object context
       
        // Arrow function
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));
    
     // implicit return
const mulTwo=(num1,num2) => (num1*num2)
console.log(mulTwo(3,4));

    // implicit return object
const u1=()=>({username:"Ritesh"})
console.log(u1());


