let myName="Ritesh"
let name=myName
name="kumar"
console.log(myName);
console.log(name); // stack memory allocation. copy created

let userOne={
    email:"rit123@gmail.com",
    upi:"user@ybl"
}
let userTwo=userOne;
userTwo.email="Riiitt@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

