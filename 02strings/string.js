const name="Ritesh"
const repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare string
const myName= new String("Ritesh")
console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(2));

const newString=myName.substring(0,4) // negative start not allowed
console.log(newString);

const anotherString=myName.slice(-6,3)
console.log(anotherString);

const newStringOne="   Ritesh   "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(myName.replace("R","H"));
console.log(myName.includes("esh"));

const s1="Ritesh-hc-com"
console.log(s1.split("-"));






