if (2=="2"){ // == does not check datatype so it will be executed
    console.log("executed")
}

if(2==="2"){ //  it will not be exeuted coz === checks datatype also
    console.log("executed")
}

//switch
const month=3
switch (month){
    
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break; // if break is not used then it will execute all the cases below it except default

    case 4:
        console.log("april")
        break;
    default:
        console.log("invalid")
        break;
}
// FALSY VALUES
// false,0,-0,null,NaN,undefined,"",BigInt 0n

// TRUTHY VALUES- values  other than falsy are truthy
// "0", " ", "false", [], {}, function(){}

// to check whwether an array is empty or not
const arr=[]
if(arr.length===0)
{
    console.log("empty array")
}

// to check whether object is empty or not
const obj={}
if(Object.keys(obj).length===0)
{
    console.log("empty object")
}

// Nullish coleshing operator ??: null or undefined
//val=5??10
//val =null??13
//val=undefined??13
val=null??12??1 // takes the first value after null
console.log(val)

// ternary operator
// syntax -- (condition)? true: false
const price=100
price>80? console.log("greater than 80"):console.log("less than 80")