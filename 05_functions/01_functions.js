function loginMsg(userName="Ritesh"){
    return `${userName} just logged in`
}

console.log(loginMsg("Hitesh"))

       // Rest operator
function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,500,100,600));
    
// object as parameter
const user={
    username:"Ritesh",
    prices:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);   
}
handleObject(user);
handleObject({
    username:"Sam",
    prices:300
})

     // Array as parameter
const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));

