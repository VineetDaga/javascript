console.log("vineet " + "Daga"); // this method is not preffered 

let str1 = "Vineet "  // this method can be used
let str2 = "Daga"
let str3 = str1 + str2
console.log(str3);

let name =  "Vineet Daga" 
let age = 21

console.log("My name is " + name + " and my age is " + age); //not preffered
console.log(`My name is ${name} and my age is ${age}`) // modern method 

let a = new String("vineet daga") // another method of declaring string
console.log(typeof a); // it shows data type as object because we are making string in the heap memory by using the keyword new
console.log(a);

// some properties of string object

//1. Length =>gives the length of the string 
console.log(a.length)

 //2. .toUpperCase() => convert thw whole string into upper case string
 console.log(a.toUpperCase());

 //3. .toLowerCase() => convert the whole string into lower case string
 console.log(a.toLowerCase());

 //4. .charAt(index) => gives the character at given index 
 console.log(a.charAt(7));

 //5. .indexOf(character) =>gives the first index of the given character
 console.log(a.indexOf('e'));
 console.log(a.indexOf('0'));

 //6. .substring(start,end) =>gives substring from index start to end -1
 // do not accept negative value. treat them as 0
console.log(a.substring(0,6));

//7.  .slic(start,end) => slice the string from index start to end -1
// accept negative idex also
console.log(a.slice(-9,-1));
console.log(a.slice(3,6));

//8. trim() => remove starting and ending spaces from the string 
let b = "    hello    "
console.log(b.trim())

//9. replace(a,b) => relace the string a to string b from the entire string
let url = "https://vineetdaga/vineet%21daga"
console.log(url.replace("%21","-"));

//10. includes(str1) =>tells us that subsring str1 is present in the string or not
console.log(url.includes("vin"));
console.log(url.includes("33"));

//11. split(separator,limit) = >split the sting on the basis of separator
let c = "My-Name-is-Vineet-Daga"
let d = "My name is Vineet Daga"

let e = c.split("-")
let f = d.split(" ")
console.log(e);
console.log(f); 

