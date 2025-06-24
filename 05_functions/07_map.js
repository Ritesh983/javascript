const myNumbers=[1,2,3,4,5,6,7]

const n1=myNumbers.map((num)=>num+10)
console.log(n1);

    // chaining: as many as you want , map and filter can be used together
const n2=myNumbers.map((num)=>num*10).map((num)=>num+1)
console.log(n2);
