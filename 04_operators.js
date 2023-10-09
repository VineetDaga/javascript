// different types of operators

/*
operators 
1. Arithmetic Operators => + ,-, *, /, **, %, ++, --
2. Assignment Operators => =, +=, -=, *=, /=, **=, %=
3. comparison Operators => ==, !=, ===, !==, <=, >=, <, >
4. Logical operatos => &&, ||, !
*/

/* 
== and === operator are not same 
== is used to check whether their value is same or not 
=== is used to check whether their value as well as type are same or not

"33" == 33 => true
"33" === 33 => false
*/

console.log("33" == 33);
console.log("33" === 33);

//Some trickey thing 

let str1 = "vineet"
let str2 = " Daga"
let str3 = str1 + str2
console.log(str3);

console.log(1 + "2");
console.log("1" + 2);
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// here last two statement give diff output because complier calculate value from left to right 

// code must be clean and readable 
// avoid from these practices
console.log(true);
console.log(+true);
console.log(+"");

let num1,num2,num3

num1 = num2 = num3 = 10

console.log("33" == 33);
console.log("33"===33);
console.log(null == 0);
console.log(null >0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);
