function addition (number1, number2) { 
    return number1 + number2;
}
let total = addition(2, 3)

console.log(total)

// expect total to be a number
// expect [action] to be [result]
// expect addition(3, 2) to be equal to 5
//  expect addition ("a", 3) to be Nan(Not a number)

// For the prompt was "A login and signup page that allows Single Sign-On with Google", your tests might include:
/*
The calculator should have four buttons for each of the basic arithmetic operations (addition, subtraction, multiplication, and division).
The calculator should have two input fields where the user can enter the numbers they want to operate on.
The calculator should have a "Calculate" button that the user can click to perform the operation.
The calculator should display the result of the operation in a clear and readable format.
*/

// when the user enters valid positive number and clicks the multiplication button, the calculator should display the total when the calculate button is clicked
// when the user performs a calculation and then enters new values without clicking clear the calculator should perform the operaiton on the new values
// When the user enters a floaing number and clicks any arthimetic button the calculato rshould display the correct results when the calculate button is clicked

function multiplication (number1, number2) { 
    return number1 + number2;
}

function concatOdds(array1, array2) {

}
// concatOdds([], [1, 3, 5]) should return [1, 3, 5]
// concatOdds([2, 4, 6], ["a", 3, "b"]) should throw an error
// concatOdds("a", "b") should throw an error

// A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

// before user adds item to cart should ask for log in or check out
// if user uses log in information should be retrieved
// if user uses guest should ask for name and billing information
// When user uses guest should ask if they want to create account