// forEach does not return any value

// filter return value
const a=[1,2,3,4,5,6,7,8,9,10]
// const res=a.filter( (num)=>(num>4))  // parenthesis are not imp
const res=a.filter( (num)=>{
    return num>4                // while writing in curly brackets we have to write return
})
console.log(res)

// to add 10 to each element of array
const r=a.map((item)=>(item+10))
//console.log(r)

// chaining
const r1=a.map((num)=> num*10).map((num)=> num+1).filter((num)=> num>40)
console.log(r1)

// reduce
const mynums=[1,2,3]
const mytotal=mynums.reduce(function(acc,curval){
    console.log(`acc: ${acc},current value:${curval}`)
    return acc+curval

},0) // this 0 is ithe initial value which get stored in accumulator after that whatever is returned get stored in accumulator
console.log(mytotal)

// this reduce can be used in shopping cart to add the prices of items