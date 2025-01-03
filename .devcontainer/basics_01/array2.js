const a1=["mango","apple","banana"]
const a2=["tomato","brinjal"]
const a3=["litchi","guava"]
// a1.push(a2) // it does not merge two arrays it adds the socnd array as an element to the first array
// console.log(a1)
// console.log(a1[3][0])

//  const a3=a1.concat(a2) // it returns a new array by merging both arrays
// console.log(a3)

// spread operator works same as concatenate but can merge more than 2 arrays
a4=[... a1,...a2,...a3]
console.log(a4)

a5=[1,2,3,[4,5],7,8,[5,6,[8,9]]]
// a6=a5.flat(Infinity)// infinity means all the brackets will be flat
// console.log(a6)
a7=a5.flat(1)
console.log(a7)

console.log(Array.isArray("kirti"))
console.log(Array.from("kirti")) // converts into array
//console.log(Array.from(name:"kirti"))

// creating array from elements
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))