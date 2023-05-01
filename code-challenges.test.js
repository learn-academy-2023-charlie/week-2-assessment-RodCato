// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code: 


// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
//input: object with key value pair
//output: value is or is not divisible by three
//use conditional statement and modulo operator to see if the value in the object is or is not divisible by three
//result output of whether value is or is not divisible by three

// a) Create a test with expect statements for each of the variables provided.

describe ("testFunction", () => {
    it("takes an object and determine if the values are divisible by three", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(testFunction(object1)).toEqual("15 is divisible by three")
        expect(testFunction(object2)).toEqual("0 is divisible by three")
        expect(testFunction(object3)).toEqual("-7 is not divisible by three")
    })
})

// FAIL  ./code-challenges.test.js
// testFunction
//   ✕ takes an object and determine if the values are divisible by three

// ● testFunction › takes an object and determine if the values are divisible by three

//   ReferenceError: testFunction is not defined

// b) Create the function that makes the test pass.

// const testFunction = (object) => {
//     if (object.number % 3 === 0){
//         return `${object.number} is divisible by three`
//     } else {
//         return `${object.number} is not divisible by three`
//     }
// }    

// PASS  ./code-challenges.test.js
// testFunction
//   ✓ takes an object and determine if the values are divisible by three (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.145 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.57s.

//Refactor:

const testFunction = (obj) => { 
    return obj.number % 3 === 0 ? `${obj.number} is divisible by three` : `${obj.number} is not divisible by three`
}

// console.log(testFunction(object1))
// console.log(testFunction(object2))
// console.log(testFunction(object3))

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:

//input: array of words
//output: array with all words capitalized
//iterate through an array using .map and then use .charAt to pick first letter of the word (index 0) then use .toUpperCase to output the first letter capitalized
//combine that output with .slice(1) to add the first letter capital to return new array with all words capitalized

// a) Create a test with expect statements for each of the variables provided.

describe("capArr", ()=> {
    it("takes an array and makes all words capital", () =>{
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        expect(capArr(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        expect (capArr(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])

    })
})

// FAIL  ./code-challenges.test.js
// testFunction
//   ✓ takes an object and determine if the values are divisible by three (1 ms)
// capArr
//   ✕ takes an array and makes all words capital (1 ms)

// ● capArr › takes an array and makes all words capital

//   ReferenceError: capArr is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// const capArr = (array) => {
//     return array.map((value) => {
//         return value.charAt(0).toUpperCase() + value.slice(1)
//     })
// }

// PASS  ./code-challenges.test.js
// testFunction
//   ✓ takes an object and determine if the values are divisible by three (1 ms)
// capArr
//   ✓ takes an array and makes all words capital (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.141 s
// Ran all test suites.

//Refactor:

const capArr = (array) => { 
    return array.map((value) => value.charAt(0).toUpperCase() + value.slice(1))
}

// console.log(capArr(randomNouns1))
// console.log(capArr(randomNouns2))

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:

//input: a string that logs the index of the first vowel
//output: a function 
//iterate through a string and log index of first vowel
//return index from a string with first vowel using the .includes method to compare with a variable containing vowels.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("takes a string and logs index of first vowel", () => {
        const vowelTester1 = "learn"
        expect (firstVowel(vowelTester1)).toEqual(1)
        const vowelTester2 = "academy"
        expect (firstVowel(vowelTester2)).toEqual(0)
        const vowelTester3 = "challenges"
        expect (firstVowel(vowelTester3)).toEqual(2)  
    })

})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// FAIL  ./code-challenges.test.js
// testFunction
//   ✓ takes an object and determine if the values are divisible by three (1 ms)
// capArr
//   ✓ takes an array and makes all words capital
// firstVowel
//   ✕ takes a string and logs index of first vowel (1 ms)

// ● firstVowel › takes a string and logs index of first vowel

//   ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.

// const firstVowel = (string) => {
//     const vowels = ["a", "e", "i", "o", "u"];
//     for (let i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])){
//             return i
//         }
//     }
// }

// PASS  ./code-challenges.test.js
// testFunction
//   ✓ takes an object and determine if the values are divisible by three (1 ms)
// capArr
//   ✓ takes an array and makes all words capital
// firstVowel
//   ✓ takes a string and logs index of first vowel

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.15 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.66s.

//Refactor: Struggled to refactor was only able to do after extensive googling. 

// const firstVowel = (string) => {
//     const vowels = ["a", "e", "i", "o", "u"];
//     return string.map (let i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])){
//             return i
//         }
//     }
// }


const firstVowel = (string) => {
    return string.split('').findIndex((char) => ["a", "e", "i", "o", "u"].includes(char));
}


// console.log(firstVowel(vowelTester1))
// console.log(firstVowel(vowelTester2))
// console.log(firstVowel(vowelTester3))