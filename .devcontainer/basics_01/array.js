//array
const a1=[1,2,3,45,4]

const a2=new Array(1,3,4,1)
console.log(a2[1])
a2.push(8)// adds an elemnt innthe last of an array
console.log(a2)
a2.pop()// removes the last element
console.log(a2)
a2.unshift(10)// adds the element in the beginning
console.log(a2)
a2.shift() // removes the first elemnt
console.log(a2)
a2.shift()
console.log(a2)
console.log(a2.includes(6))
console.log(a2.indexOf(3)) // returns -1 if it is not present

const a3=a2.join()
console.log(a3)// converts the arra into a string

// slice and splice imp
const a4=[1,2,3,34,5,6,7,9,7,9,0]
a5=a4.slice(1,3)
console.log(a4) // does not change the original array
console.log(a5)

//splice
const a6=[1,2,3,34,5,6,7,9,7,9,0]
a7=a6.splice(1,3) // chnages the original array and also includes 3rd index 
console.log(a6)
console.log(a7)