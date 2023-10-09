let score = "33"
let a = Number(score)

console.log(a);
console.log(typeof a);

score = "33aa"
a = Number(score)

console.log(a);
console.log(typeof a);

score = ""
a = Number(score)
console.log(a);
console.log(typeof a);

score = null
a = Number(score)
console.log(a);
console.log(typeof a);

score = undefined
a = Number(score)
console.log(a);
console.log(typeof a);

score = true
a = Number(score)

/*
conversion of various type of input in numbers
true/false => 1/0
in case of string if its entirely consist of number 
like "33", "846" => 33 , 846 successfully converted

for string containing other than numbers => NaN (not a number)
for "" and null => 0
for undefined =>NaN
*/

//CONVERSION TO BOOLEAN

let value = 1
let b = Boolean(value)
console.log(b);
console.log(typeof b);

value = 0
b = Boolean(value)
console.log(b);
console.log(typeof b);

value = -565
b = Boolean(value)
console.log(b);
console.log(typeof b);

value = 656
b = Boolean(value)
console.log(b);
console.log(typeof b);

value = ""
b = Boolean(value)
console.log(b);
console.log(typeof b);

value = "vineet"
b = Boolean(value)
console.log(b);
console.log(typeof b);

value = null
b = Boolean(value)
console.log(b);
console.log(typeof b);

value = undefined
b = Boolean(value)
console.log(b);
console.log(typeof b);

/*
conversion to boolean 
for any number except 0 => true
for 0, null, undefined, "" => false
for any string except "" => true
*/

//CONVERSION TO STRING

// number is direclty converted to string

let c = true
console.log(String(c));

c = false
console.log(String(c));

c = null
console.log(String(c));
c = undefined
console.log(String(c));

// in conversion to string the input is directly converted to string without any change in the input 

