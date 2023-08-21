// This is a basic JavaScript program
function greet(name) {
  return "Hello, " + name + "!";
}

const personName = "John";
const greeting = greet(personName);
console.log(greeting);

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Calculate the sum of numbers in the array
let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log("Sum of numbers:", sum);

// Check if a number is even or odd
function isEven(number) {
  return number % 2 === 0;
}

const testNumber = 7;
console.log(testNumber, "is even:", isEven(testNumber));
