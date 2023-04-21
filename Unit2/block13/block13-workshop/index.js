// if value is truthy, print true
/* if value is falsy,
else if "The boolean value false is falsy";
else if "The null value is falsy";
else if "undefined is falsy";
else if"The number 0 is falsy (the only falsy number)";
else if "The empty string is falsy (the only falsy string)"; */

let inputValue; 
// Declare value for inputValue below; 
inputValue = false

if (inputValue) { 
    console.log(true)
} else if (inputValue === false) { 
    console.log("The boolean value false is falsy");
} else if (inputValue === null) { 
    console.log("The null value is falsy")
} else if (inputValue === undefined) { 
    console.log("undefind is falsy")
} else if (inputValue === 0) { 
    console.log("The number 0 is falsy (the only falsy number)")
} else if (inputValue === "") { 
    console.log("The empty String is falsy (The only false string)")
} 




// [Number Line]
let num1;
let num2; 
let sumValue; 
// Declare value for sumValue below;

num1 = -5010;
num2 = 500; 
sumValue = num1 + num2;

if (sumValue >= 100) { 
    console.log (sumValue + " is greater than 100");
} else if (sumValue > 0) { 
    console.log (sumValue + " is greater than 0");
} else if (sumValue == 0) { 
    console.log (sumValue + " is equal to 0")
} else if (sumValue < 0) { 
    console.log (sumValue + " is a negative number")
}


// [Greater than 5]

let valueOne;
let valueTwo;

valueOne = 0;
valueTwo = 0;

if (valueOne >= 5 && valueTwo >= 5) { 
    console.log (true); 
} else if (valueOne < 5 || valueTwo < 5) { 
    console.log (false);
}

// [pair and compare enter your conditions in param section below]
let param1A = "cat";
let param1B = "cat";
let param2A = 6;
let param2B = "6";

if (param1A === param1B || param2A === param2B) {
    console.log(true);
} else {
    console.log(false);
}