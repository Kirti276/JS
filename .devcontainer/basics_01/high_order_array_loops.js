// for of 

const arr=[1,2,3,4,5]
for (const i in arr)
{
    //console.log(arr[i])
}

const str="hello world"
for(const greet in str){
    //console.log(str[greet])
}

// MAPS -- stores unique values in the same order as given
const map=new Map()
map.set('in',"india")
map.set('ch',"china")
map.set('fr',"france")
map.set('in',"india")
 
//console.log(map)

// running loop in map
for(const iterator of map){
   // console.log(iterator)
}

for(const [key,value] of map){
    //console.log(key,":",value)
}

//objects are not iterable in this way
obj={
    username:"leo",
    age:20
}
//for(const i of obj){
    //console.log(key,":",value) // will give errror
//}

// objects are iterable by for in
const o2={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}
for(const i in o2){
   // console.log(`${i}, ${o2[i]}`)
}

// trying for in with array
const ar=["js","ruby","c++"]
for(const i in ar){
    console.log(i) // will give keys of array which are the indexes
    //console.log(ar[i])
}

// maps are not iterable by for in

// using for each
const myarr=["js","ruby","java"]
myarr.forEach( function (item){   // we do not write name of function
    console.log(item)
})

// by using arrow functions
myarr.forEach( (item)=>{
    console.log(item)

})

myarr.forEach((item,index,myarr)=>{
    console.log(item,index,myarr)
})

// interesting
const mycoding=[
    {
        lang_name:"javascript",
        lang_file:"js"
    },
    {
        lang_name:"java",
        lang_file:"java"
    },
    {
        lang_name:"python",
        lang_file:"py"
    }
]
mycoding.forEach( (item)=>{
    console.log(item.lang_file)

})