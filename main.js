// # Pseudocode Demo: Company Greeting
// ## Welcome to Archnemesis, Inc. – the company that cares!
// ### Requirements
// 1. Write a unique morning greeting for each day of the week.
let today = new Date ();
let dayOfWeek = today.getDay();

if (dayOfWeek == 1) {
document.write("Happy Monday - Let's kick the week off strong!");
}
else if (dayOfWeek == 2) {
document.write("It's Taco Tuesday!");
}
else if (dayOfWeek == 3) {
document.write("Hump Day - half way done the week!");
}
//else if (dayOfWeek == 4) {
// document.write("Tee time Thursday!");
// Holiday check
// if (dayOfWeek == 4){
//    
//}
// }
else if (dayOfWeek == 5) {
document.write("We made it to end of the week!  Happy Friday!");
}
//
//
//
//
//
// 2. If today is Thursday and Friday is a holiday, check if it is *also* a holiday. If so, begrudgingly demand that the employee enjoy their "long weekend."
//
//
//
//
//
// 3. Check the employee's current hours for the week. If they are getting close to overtime, remind the employee of their current hours with a warning.