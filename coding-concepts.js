// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
// console.log(cohort.split(" "))

// a) Your answer: all letters in the string "Charlie 2023" in a separate string.
// b) Verify and explain: .split is a built in method that will separate a string by each letter when it has the function of "". " "(quotations with a space in the middle) will return each word split into its own string.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))
//output: undefined

// a) Your answer: undefined
// b) Verify and explain: The variable greeter does not have a value defined, meaning that name is equal to nothing and so the greeter variable being called returns undefined.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)
//output: [ 8, 10, 12, 14, 16 ]

// a) Your answer: returns all values in the array multiplied by 2
// b) Verify and explain: .map is a function that can iterate through an array, in this case number is the parameter for the index values of the array and number * 2 is all the values in the array multiplied by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)
//output: [ 11, 13, 15 ]
// a) Your answer: [11, 13, 15]
// b) Verify and explain: .filter returns a subset of an array. In this case the subset is a number from the array that has a remainder that does not equal 0 indicating that it is an odd number

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: myCodingSkills is an object with key value pairs .languages indicates the first key value pair and [0] indicates its an array index of 0 which is the value we get of Javascript. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name, age) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
    this.age = age
  }
}
const learnStudent = new Learn("George", 12)
//console.log(learnStudent)

// a) Your answer: Learn { student: 'George', cohort: 'Charlie', year: 2023 }
// b) Verify and explain: the constructor is expecting one argument of name which is unfixed. new Learn redoes the class with the unfixed value of name set to be equal to "George" and the rest of the values equal to their set values. Basically "George" is a new parameter that replaces the unfixed property of name. 
