// # Pseudocode Demo: Company Greeting
// ## Welcome to Archnemesis, Inc. – the company that cares!
// ### Requirements
// 1. Write a unique morning greeting for each day of the week.
let user = prompt("What is your login?");
let today = new Date ();
let dayOfWeek = today.getDay();
let greeting;
let longWeekend;

if (dayOfWeek == 1) {
    greeting = ("Happy Monday " + user + " - Let's kick the week off strong!");
}
else if (dayOfWeek == 2) {
    greeting = ("It's Taco Tuesday " + user + "!");
}
else if (dayOfWeek == 3) {
    greeting = ("Hump Day - half way done the week " + user + "!");
}
//else if (dayOfWeek == 4) { 
// Holiday check
// if (dayOfWeek == longWeekend){
//    
//}
//document.write("Tee time Thursday!");
// }
else if (dayOfWeek == 5) {
    greeting = ("Congragulations " + user + ", you made it to end of the week!  Happy Friday!");
}
else{
  greeting = ("Hey there " + user + ", hope you're having a great weekend!");
}
//
document.write(greeting);
//
//
// 2. If today is Thursday and Friday is a holiday, check if it is *also* a holiday. If so, begrudgingly demand that the employee enjoy their "long weekend."
//
//
//
//
//
// 3. Check the employee's current hours for the week. If they are getting close to overtime, remind the employee of their current hours with a warning.