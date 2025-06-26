// 1. Write a program to print your name and address,
let name = "Chandan kumar";
let address = "Saran, Bihar (India)";

console.log("Name: " ,name);
console.log("Address: " , address);


// 2. Write a program to check whether value and data-type of two variable are same.

let a = 100;
let b = "100";

if (a === b) {
    console.log("Value and Data Type are the same");
} else {
    console.log("Value and/or Data Type are NOT the same");
}

// 3.Add two strings and return them with all alphabet capital

function addStringsUppercase(str1, str2) {
    return (str1 + str2).toUpperCase();
}

let result = addStringsUppercase("hello", "world");
console.log(result);

// 4. Convert the length of a given string in bytes

function getStringByteLength(str) {
    return new TextEncoder().encode(str).length;
}

let input = "Hello, world!";
console.log(`Byte length of "${input}" is:`, getStringByteLength(input));

//  5. Round a number to a specified amount of digits
function roundNumber(num, digits) {
    return Number(num.toFixed(digits));
}

console.log(roundNumber(3.1415926535, 2)); 
console.log(roundNumber(123.456789, 4));  
