//primitive
// 7 types: String,number,boolean,null,undefined ,symbol,bigInt
const score=100
const scorevalue=119.1
const isLoggedIn=false
const temp=null
let useremail;
const id=Symbol('123')
const anotherid=Symbol('123') //they are unique even if they have same value
console.log(id===anotherid)
const bignumber=12357455067584365290n // it stores it in bigInt datatype

//non primitive
// arrays,objects,functions
const fruits=["apple","mango"]//array
const myobj={
    name:"kirti",
    age:18
} //object
const myfunc=function(){
    console.log("hellow world")
}

/* Primitive Datatypes (typeof)
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

 Non-primitive Datatypes(typeof)
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// stack (primitive) copy me chnages hote
// heap (non primitive ) original me chnGES hote