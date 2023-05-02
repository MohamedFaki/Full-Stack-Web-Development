// if
// if
// else if


let input = " I am a string "
if(input === false){
    console.log("The boolean value false is falsy")
}
if(input === null){
    console.log("The null value is falsy")
}
if(input === undefined){
    console.log("undefined is falsy")
}
if(input === 0){
    console.log("The number 0 is falsy (the only falsy number)")
}
if(input === ""){
    console.log("The empty string is falsy (the only falsy string)")
}
else{
    console.log('true')
}

//Number Line
// 1. Declare and initialize variables
let value1 = -1001
let value2 = 0
let sum = value1 + value2
/* 2. if the sum is less than -1000
 print the sum value is less than -1000
 3. else if  sum is greater or equal to 1000 and less than 0
 print sum value  is negative number
 4. else if sum is equal to 0
 print sum value is equal to 0
 5. else if sum is greater than 0 and less than or equal to 100
 print sum value is   greater than 0
 6. else
 print sum is greater than 100 */
 if(sum <-1000){
    console.log(sum + " is less than -1000.")
 }
 else if(sum >= -1000 && sum < 0){
    console.log(sum + " is a negative number")
 }
 else if( sum === 0){
    console.log(sum + " is equal to 0")
 }
 else if (sum > 0 && sum <= 100){
    console.log(sum + " is greater than 0")
 }
 else{
    console.log(sum + " is greater than 100")
 }



// Greater than 5
// Decalre and initialize variables
let num1 = 4
let num2 = 4
// if  first value and second are both equal to or greater than five

if(num1 && num2 >= 5){
    //print true
    console.log('true')
}

//else
else{
//print false
console.log('false')
}

//Pair and Compare
//Declare and initiallize variables
let param1A	= "cake"
let param1B	= "cake"
let param2A	= "pie"
let param2B = "pie"
// if one of the pair of variables is equal in both type and value
if(param1A === param1B || param2A === param2B){
    //print true
    console.log('true')
}
// else
else{
    //print false
    console.log('false')
}