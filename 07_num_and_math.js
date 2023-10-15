// there are two ways to declare numbers in the javascript

let score = 100 // => uses stack memory ,dtype = number
let score1 = new Number(100) //=> uses heap memory, dtype = object

// some properties
// 1. toString() =>convert into string

let a = score1.toString()
console.log(typeof a);

//2. tofixed(x) => convert number such that it has x digit after decimal point
let b = score1.toFixed(2)
console.log(b);
b = new Number(64926.4294)
console.log(b.toFixed(2));
b = 949.9492
console.log(b.toFixed(3));

/*3. toprecision(x) => convert it into number or exponential number with digits equal to x
                    => it retutns a String
                    => range of x is from 1-21
*/

b = 0.01495626
console.log(b.toPrecision(3));
console.log(b.toPrecision(4));
b = 5949679
console.log(b.toPrecision(3));
console.log(b.toPrecision(2));

//4. toLoaclString => adds commas to the number
console.log(b.toLocaleString());
console.log(b.toLocaleString("en-IN"));

//5. for max_int, min_int
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);

// ************************** MATHS ***************************** //

// for values 
console.log(Math.E);
console.log(Math.PI);

// for function 
/* 1. .abs() =>absolute value
   2. .round() => for rounding off values
   3. .ceil() => gives the upper value
   4. .floor() => gives the lower value
   5. .min([x,y, ...]) => gives min value need more than one value or array as an arguement
   6. .max([...]) =>gives max value
   7. .random() =>gives random value from 0 to 1
                => most important function 

*/

console.log(Math.random());
//for range o-10
console.log(Math.floor(Math.random()*(10 + 1)));
// for range 1-10
console.log(Math.floor((Math.random()*10)+1));

// for different ranges
let minn = 10
let maxn = 20
console.log(Math.floor((Math.random()*(maxn - minn +1)) + minn));