const user={
    username:"kirti",
    age:18,
    welcome_user:function(){
        console.log(`${this.username}, welcome to website`)  // this refers to current context
         console.log(this)
     }
}
user.welcome_user()
user.username="sam"
user.welcome_user()
//console.log(this) //we enter into node environment isliye this gives empty parenthesis

// in functions we cannot use this as we have used in objects , this refers to global object
function showthis(){
     username=" Siddharth " // username is declared globally here
    console.log(this.username)
  }
  showthis()


function showthis(){
    let username=" Siddharth " // here username is declared locally by using let and this refers to global object so it will be undefined
    console.log(this.username)
  }
  showthis()


// when console.loh(this) is outside the function then it gives empty parenthesis which is global


//arrow functions
const addtwo=(n1,n2)=>{
    return n1+n2
}
console.log(addtwo(3,4))

// another way to write arrow functions
const subtwo=(n1,n2)=>(n1-n2)// not usin return statement and curly brackets, parenthesis are imp
console.log(subtwo(9,5))
    

// difference between arrow and regular functions is this that arrow functions give undefined whether the variable is declared 
// globally or locally becoz arrow func do not automatically add properties to this unlike regular func 