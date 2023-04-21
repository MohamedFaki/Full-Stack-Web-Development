//Pseudocode step outline
// Declare 3 variable with different mathmmatical operators 
// Total should equal 10, 40, 39, 
// Enter if and else if statements 
// link HTML file to css and HTML and create a basic form
// Pretty up the box

// create string greeting containing a message and the secret combination
const greeting = "You have received this message because you have been chosen to open an important vault.";
// Create an alert with the content of the greeting

function checkInput() {
    alert(greeting);
    // declare a new variable called "num1" and assign it the result of adding 5 and 5
    const num1 = 5 + 5;
    // declare a new variable called "num2" and assign it the result of multiplying 20 and 2
    const num2 = 20 * 2;
    // declare a new variable called "num3" and assign it the result of subtracting 1 from 40
    const num3 = 40 - 1;

    // retrieve the value of the input field
    const input = document.getElementById("number").value;

    // check if the input value matches the sum of the correct values

    // if false move to else statement
    // if true move to next else-if statement
    if (input == num1) {
        alert("Congratulations! Proceed to the next input.");
        // if true move to next else-if statement
    } else if (input == num2) {
        alert("Congratulations! Proceed to the next input.");
        // Congratulations! You have secured the vault.
    } else if (input == num3) {
        alert("Congratulations! You have secured the vault.");
    } else {
        alert("Sorry, that's not the correct number. Please try again.");
    }
}