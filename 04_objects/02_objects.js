// const tinderUser=new Object()     constructor method(singleton object)
 const tinderUser={}              // literal (non-singleton method)

 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false
 console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstname:"Ritesh",
            lastname:"Kumar"
        }
    }
}
//console.log(regularUser.fullname.userFullName.firstname);

const obj1={1: "a",2: "b"}
const obj2={3: "a",4: "b"}
const obj3={5: "a",6: "b"}

// const obj4={obj1 , obj2 ,obj3}
// console.log(obj4);

// const obj5=Object.assign(obj1,obj2,obj3)
// console.log(obj5);

// const obj6=Object.assign({},obj1,obj2,obj3)
// console.log(obj6);

// const obj7={...obj1,...obj2,...obj3}
// console.log(obj7);



const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"R@gmail.com"
    }
]
//console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Ritesh"
}
      // Object destructuring
// const {courseInstructor}=course
// console.log(courseInstructor);

const {courseInstructor:i}=course
console.log(i);

