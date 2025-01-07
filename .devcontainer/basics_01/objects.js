// object literal
const mys=Symbol("hey")
const o1={
    name: "kirti",
    [mys]:"hi", // using symbol 
    age:18
}
console.log(o1[mys])
//to change a element
o1.name="bittu"
console.log(o1["name"])
Object.freeze(o1)// now changes will not happen in object
o1.name="guddu"
console.log(o1["name"]) // will print bittu only


// object singleton
const tinder={}
tinder.name="kirti"
tinder.age=18
tinder.loggedin=false
console.log(tinder)

//nesting in objects
const obj2={
    name:{
        middlename:"null",
        lastname:"bansal"
    }
}
console.log(obj2.name.lastname)

//merging two objects
const p1= {1:"one",2:"two"}
const p2= {3:"three",4:"four"}
p5={5:"five",6:"six"}
const p3={p1,p2}// it creates a new array with p1 and p2 as its keys 
// console.log(p3)
const p4=Object.assign({},p1,p2,p5)//merges both objects , {} they are given when we want to merge more than 2 objects but not compulsory
 //console.log(p4)

 //OTHER WAY TO COMBINE IS
 p6={...p1,...p2}//spread operator
 console.log(p6)

 //destructuring of object 
 const course={
    name:"python",
    price:999,
    courseinstructor:"kirti"
 }
 const {courseinstructor:teacher}=course
 console.log(teacher)

 //json
 {
    "name":"kirti",
    "age":18
 }

 [
    {},
    {},
    {}
 ]