// there are two ways to decalare an array

let a = [0,1,2,3,4,5,6]
let b = new Array(0,1,2,3,4,5,6,7)
 // the type of array is object
 // array is the collection of item in javascript the element can be anything number, string, mixed value
 let c = ["vineet",1,true,null,undefined] // not necessary to contain the same element

 // the array in javascript is resizeable and follows shallow copy
//   shallow copy => share same reference point, changes are directly made to the original array 
//   deep copy    => doesnt share same refernce point, chnages are made to the copy and refelect on the original array

// method of array 

a.push(9)
console.log(a);
a.pop();
console.log(a);
a.unshift(9)
console.log(a);
a.shift()
console.log(a);
console.log(a.includes(8))
console.log(a.includes(2));
console.log(a.indexOf(3));
console.log(a.indexOf(9));
console.log(a.join());

console.log(a.slice(1,4));
let d = a.splice(1,4)
console.log(a);
console.log(d);

a.push(d);
console.log(a);

let e = a.concat(b)
console.log(e);
e = a.concat(b,c)
console.log(e);

e = [...a,...b,...c,...d]
console.log(e);
console.log(e.flat(Infinity));

console.log(Array.isArray(a));
console.log(Array.from("vineet"));
console.log(Array.of(c,a,a,b));
