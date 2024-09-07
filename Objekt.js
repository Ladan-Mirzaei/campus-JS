/*# JS Objects

## 01 - value type number

```js
const numberA = 30;
let numberB = numberA;

console.log(`numberA: ${numberA} numberB: ${numberB} `);//numberA:30 numberB:30

numberB = 45;
console.log(`numberA: ${numberA} numberB: ${numberB} `);
```

-   What output do you expect? 

-   What is `let numberB = numberA;` doing? A in B 

-   What is `numberB = 45;` doing?  numberB ist 45

## 02 - reference type object

```js
const john = {
    name: 'John',
    age: 30,
    job: 'developer',
};

const jane = john;
jane.name = 'Jane';

console.log('john:');
console.log(john);
console.log('jane:');
console.log(jane);
```

-   What output do you expect? 

-   What is `const jane = john;` doing? linken /
# 03 - dot notation

```*/
const golf = {
  color: "red",
  maxSpeed: "180",
};

const opel = {
  color: "blue",
  maxSpeed: "185",
};
console.log(golf.color);
console.log(opel.color);
golf.color = "blue";
opel.color = "red";

console.log(opel.color);
console.log(golf.color);
