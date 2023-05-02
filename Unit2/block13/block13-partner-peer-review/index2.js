// Declare the input variable and assign a value for testing
let input = " hello "; // Change this value to test other cases

// Check if the input is truthy
if (input) {
  console.log(true);
}

// Check if the input is the boolean value false
if (input === false) {
  console.log("The boolean value false is falsy");
} 
// Check if the input is null
else if (input === null) {
  console.log("The null value is falsy");
} 
// Check if the input is undefined
else if (input === undefined) {
  console.log("undefined is falsy");
} 
// Check if the input is the number 0
else if (input === 0) {
  console.log("The number 0 is falsy (the only falsy number)");
} 
// Check if the input is an empty string
else if (input === "") {
  console.log("The empty string is falsy (the only falsy string)");
}