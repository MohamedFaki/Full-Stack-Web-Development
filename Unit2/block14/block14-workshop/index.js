/* Only Odds
Create an array of numbers
Loop through each number in the array and check if it's odd
Add each odd number to a new array, then return the array */

const numbersArray = [2, 4, 6, 8, 11, 20, 15, 22]

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 == 1) {
        console.log(numbersArray[i]);
    }
}

/* Create a string of lowercase letters
Loop through each character in the string and count the consonants and vowels
Print a message to the console with the counts of consonants and vowels */

const str = 'hello';
let consonants = 0;
let vowels = 0;

for (let i = 0; i < str.length; i++) {
  if (['a', 'e', 'i', 'o', 'u'].includes(str[i])) {
    vowels++;
  } else {
    consonants++;
  }
}

console.log(`${str} has ${consonants} consonants and ${vowels} vowels`);

/* Create an array of elements
Loop through each element in the array in reverse order and add it to a new array
Return the new array */ 

const originalArray = [1, 2, 3];
const reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}

console.log(reversedArray);

/*Loop through numbers from 1 to 100
Check if the current number is divisible by 3, 5, or both, and print the corresponding word or number
Continue the loop until 100 is reached */

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }