var vergleichszahl = "";
if (vergleichszahl) {
  console.log("innerhalb geschweiften Klammern");
}

//if
const numChildern = 3;
if (numChildern > 0) {
  console.log("du bist nicht singel");
} else {
  console.log("du bist singel");
}
//if
const a = 3;
const b = 4;
const c = "5";
if (a === b) {
  console.log("a ist gleich wie b");
} else {
  console.log("a ist nichtgleich wie b");
}
console.log("a", typeof a);
console.log("b", typeof c);

const numberC = Number(c);
const stingA = a.toString();

// Exercise 1
// Otherwise, print `"The number is not greater than 10"`.

let number = 7;
if (number > 10) {
  cosole.log("The number is greater than 10");
} else {
  console.log("he number is not greater than 10");
}
// Exercise 2
const numberEvenOdd = 6;
if (numberEvenOdd % 2 === 0) {
  console.log("Number ist Even");
} else {
  console.log("Number ist Odd");
}

// Exercise 3
const age = 18;
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log("ou are not old enough to drive");
}
// Exercise 4
const numberGrading = 65;
if (numberGrading >= 90) {
  console.log("A");
} else if (numberGrading >= 80 && numberGrading <= 89) {
  console.log("B");
} else if (numberGrading >= 70 && numberGrading <= 79) {
  console.log("C");
} else if (numberGrading >= 60 && numberGrading <= 69) {
  console.log("D");
} else {
  console.log("F");
}
// Exercise 5

const number1 = 42;
const number2 = 42;
if (number1 < number2) {
  console.log("The First number is greater");
} else if (number1 > number2) {
  console.log("The Secound number is greater");
} else {
  console.log("Both numbers are equal");
}

//Exercise 6

let dayNumber = 28;
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Number muss zwichen 1 und 7 sein!");
    break;
}
// Exercise 7

const count2 = 0;
if (count2 === 1) {
  console.log("apple");
} else {
  console.log(count2 + " apples");
}
//oder (truthy), Operator
const appelCase = count > 1 ? "apple" : count + " apples";
console.log(count);

// Exercise 8
// Leap year

const year = 1600;
const isLeapYear = false; // Replace this with the ternary operator
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

//Exercise 8

const input = undefined;

const userName = ""; // replace this with your ternary operator

console.log(userName);
