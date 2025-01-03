//dates 
let d=new Date()
console.log(d.toString())
console.log(d.toLocaleDateString())
console.log(d.toLocaleString())
console.log(typeof d)  //date is object  asked generally

let newd=new Date(2023,0,23) //months starts from 0 index
console.log(newd.toString())

//to print the date in yy-mm-dd format
let d2=new Date("2024-01-14") //in this format month starts from 1 index
console.log(d2.toString())
console.log(d.toLocaleString())

//to print in mm-dd-yy format
let d3=new Date("02-28-2006")
console.log(d3.toString())

// to get the timestamps
let d4=Date.now()
console.log(d4) //it gives time in miliseconds
console.log(Math.floor(Date.now()/1000))//gives the time in seconds