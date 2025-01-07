// IIFE Immediately invoked function expression-to avoid the pollution by global scope
(function chai(){
    // named iife
    console.log("kirti")
})(); // semicolon terminates this iife now we can write another iife

( (name)=>{
    console.log(`my name is ${name}`)
}

)("kirti")

