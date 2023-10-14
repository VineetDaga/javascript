/*
There are two types of data types 
1.  Primitive                  2. Non - primitive
difference is based on how these data types are stored in memory and how we can access them 

Primitive Data types => are stored in stack memory and are accessed as call by value 
                     => the changes are made by copying the value
                     => Number,Bigint,boolean,string,null,undefined,symbol

Non- Primitive data types =>are stored in heap memory and are accessed as call by reference 
                     => chnages are directly made in the memory
                     => array,object,function 

=> javascript is dynamically types language

*/

const a = ["vineet","Daga", "name","harsh"] // => data type = object
const b = {  // data type = object
    name : "vineet",
    rollno : 519,
    batch : "A7"
}

const c = function(){  //datatype = function object
    console.log("vineet Daga")
}

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// example of stack memeory
let aa = "vineet daga"
let bb = aa
aa = "daga Vineet"

console.log(aa);
console.log(bb);

// example of heap memory
let one = {
    name: "vineet",
    class: "B Tech"
}

let two = one
one.name = "harsh"
one.class = "ECE"

console.log(one);
console.log(two);