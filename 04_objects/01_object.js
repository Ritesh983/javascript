const mysm=Symbol("key1")

const jsUser={
    name:"Ritesh",
    age:18,
    email:"1234@gmail.com",
    isLoggedIn:false,
    [mysm]:"key1",
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mysm]);

jsUser.email="Ritesh@gmail.com"
console.log(jsUser.email);

// Object.freeze(jsUser)

jsUser.greeting=function(){
    console.log(`Hello JS user,${this.name}`);   
}

console.log(jsUser.greeting());
console.log(jsUser.greeting);



