  function sum(n1,n2){ // parameters
    //console.log(n1+n2)
    let r=n1+n2
    return r //or return n1+n2

  }
 const res= sum(4,5)//arguments
 console.log("result:",res)
// 2nd example
 function LoginUserMessage(username){ // can give default value
    return `${username} just logged in`
 }
 console.log(LoginUserMessage())// asked - if nothing is passed as an argument then it gives undefined and if empty string" " is passed then space is given in output


 // 3rd example
 function cal_cart_price(...num){ //... is rest operator - takes any number of values and stores as array in num
    return num
 }
 console.log(cal_cart_price(200,400,500))

 //4th example
 user={
    name:"kirti",
    age:18
 }
 function handling_object(obj){
    console.log(`user's name is ${obj.name} and age is ${obj.age}`)
 }
 handling_object(user)
 handling_object({    // direct object bhhi pass kr sakte
    name:"bittu",
    age:19
 })
 // same we can pass array 
 