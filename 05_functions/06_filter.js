const myNums=[1,2,3,4,5,6,7]

const newNums=myNums.filter((num)=>num>4)
//console.log(newNums);

const n1=myNums.filter((num)=>{
    return num>4
})
//console.log(n1);

const n2=[]
myNums.forEach((num)=>{
    if(num>4){
        n2.push(num)
    }
})
console.log(n2);
