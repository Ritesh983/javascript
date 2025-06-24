const array1=[1,2,3,4,5];

const initialValue=0;
const summ=array1.reduce(
    (accumulator,currentValue)=> accumulator+currentValue,initialValue
);
console.log(summ);
