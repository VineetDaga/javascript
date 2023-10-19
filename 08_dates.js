// dates is a little bit tricky concept in the javascript 
// it is measured from 1 jan 1970 in millisecind till this date 
// we will use various method to convert the date from millisecond format to some readable format 

let date1 = new Date()
console.log(date1);
console.log(typeof date1);

// varoious methods that can be used on it 
console.log(date1.toString()); //give detailed info on date
console.log(date1.toDateString()); // date and day
console.log(date1.toISOString()); //same output as new Date()
console.log(date1.toJSON()); // same output as new date()
console.log(date1.toLocaleDateString()); // only gives date
console.log(date1.toLocaleString()); // date with time

// to set a specific date => in 2 ways inout can be given 

//1. in forms of numbers separested by commas
let date2 = new Date(2023,0,367) // the format is yyyy,mm,dd
// but there is a tricky thing here 
// the month jan is starts from the 0
// for the date part if its more than 30 or 31 then date is set according dayes are added to the date 
// and time always start from 00:00 AM

console.log(date2);
date2 = new Date(2023,8,12,14,59,45)
// we can futher describe the hour minutes and sec in the date 
// from the above input it must 
// 12/09/2023 14:59:45

// if any value is more than its max value then extra value is carry be forwaeded like the above example 
console.log(date2);

// 2. the input is given in the form of the string 
date2 = new Date("2023-01-23") // the format is yyyy-mm-dd
console.log(date2.toString());
date2 = new Date("12-23-2023") // another format is mm-dd-yyyy
console.log(date2.toString());

// lets try adding time to it 
// date2 = new Date("2023-01-23-14-59-23")
//console.log(date2.toString()); // this gives invalid date 
// this method can be used only for the date and not for the time 
console.log(date2.getTime());
date2 = Date.now()
console.log(date2);
// these are timestamps are used to in polls and quizs 
 
// we can direlctly extract month and day and many more from the date directly
date2 = new Date()
console.log(date2.getDate());
console.log(date2.getDay()); // monday as 1, sunday as 7
console.log(date2.getMonth() + 1); // months start from 0
console.log(date2.getHours());

date2 = date2.toLocaleString("default",{
    weekday: "long"
})
console.log(date2);
