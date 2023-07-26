// Problem: 01
// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"

// Solution:
function reverse(text){
    return console.log(text.split("").reverse().join(''));
}

reverse("hello world");


// Problem: 02
// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

  
  function allPositiveNumbers(array){
    const positiveNumber = array.filter(num => num > 0);
    const add = positiveNumber.reduce((acc, curr) => acc + curr, 0);
    return add;
  }

  const totalArray = [2, -5, 10, -3, 7];
  console.log(allPositiveNumbers(totalArray));

//   Problem: 03
// Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function mostFrequentNum(array) {
    const frequentNum = {};
    for (const number of array) {
        frequentNum[number] = (frequentNum[number] || 0) + 1;
    }
let mostFrequentNumber;
let highestNumber = 0;

for (const number in frequentNum){
    if (frequentNum[number] > highestNumber) {
        mostFrequentNumber = parseInt(number);
        highestNumber = frequentNum[number];
    }
}
 return mostFrequentNumber;
}

const inputNumber = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(mostFrequentNum(inputNumber));

// Problem: 05
//  Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(value1, operator, value2){
    switch (operator){
        case '+':
            return value1 + value2;
            case '-':
                return value1 - value2;
            case '*':
                return value1 * value2;
                case '/':
                    if(value2 === 0){
                        return "Error: divisible by zero is not valid"
                    }
                    return value1 / value2;
                    default:
                        return "Error: Invalid Operator. Use one of these +, -, * or /.";
    }
}

console.log(calculator(15, '/',  5));

// Problem: 06
// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=[]{}|:;"\'<>,.?/~';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
  
    return password;
  }
  
  const passwordLength = 8;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  
//   Problem: 07
//  Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(roman) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentNumeral = romanNumerals[roman[i]];
      const nextNumeral = romanNumerals[roman[i + 1]];
  
      if (nextNumeral > currentNumeral) {
        result += (nextNumeral - currentNumeral);
        i++; 
      } else {
        result += currentNumeral;
      }
    }
  
    return result;
  }
  
  console.log(romanToInt('LVMCMX'));

//   Problem: 08
// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Error: The array must include at least two numbers.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (const num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      return "Error: There is no second smallest number in the array.";
    }
  
    return secondSmallest;
  }
  

  const inputArray = [67, 3, 48, 9, 1, 100];
  const secondSmallest = findSecondSmallest(inputArray);
  console.log(secondSmallest);
  
  

