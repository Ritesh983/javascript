let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString);
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,23);
// let myCreatedDate=new Date(2023,0,23,5,3);
// let myCreatedDate=new Date("2023-01-14");
let myCreatedDate=new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());

let myTimeStamp=Date.now();
console.log(myTimeStamp);  // gives milliseconds
console.log(Math.floor(myTimeStamp/1000));  //gives seconds

console.log(myDate.getMonth()+1);
console.log(myDate.getDay());


myDate.toLocaleString('default',{
    weekday:"short"
})

