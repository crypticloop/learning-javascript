# ES6
---

* Can use ES6, 7 and 8 with all modern browsers,
  * and with older browsers by transpiling and polyfilling
* ES6 bought most of the updates, and 7 and 8 were small additions on top of this
* The areas updated with ES6 were:
  * variable declaration: `let` and `const`
  * Blocks and IIFEs
  * Strings
  * Arrow functions
  * Destructuring
  * Arrays
  * Spread operator
  * Rest and default parameters
  * Maps
  * Classes and subclasses

## `let` and `const`

* ES5 used `var` to declare variables
* `var` can be mutated
  * `const` cannot be mutated
  * `let` can be mutated
* If trying to reassign `const`, `assignment to constant variable` error is returned
* Functions declared with `let` and `const` are **block scoped**
  * Cannot be accessed outside the curly braces in which they are defined
* Declarations of `let` and `const` in higher order blocks make them accessible to all nested blocks
  * **`const` must have a value assigned** in the higher order block
  * `let` can be declared without a value and still used inside nested blocks
* In ES5, variable names were **hoisted** and set as undefined
  * ES6 instead returns a `... is not defined` error
  * Occurs because of the `temporal debt zone`

## Blocks and IIFEs

* Simpler way of achieving data privacy instead of using IIFEs
* Due to block scoping of variables
* Instead of IIFE declaration, simply include inside **curly braces**

## Strings

* **Template literals** concatenates strings without '+' signs
* Use the "\`" instead of "\'" signs
* Include variables or expressions inside of `${...}` format
  * functions can also be called inside of these
* New string methods:
  * `.startsWith('x')` returns boolean if string starts with character argument
  * `.endsWith('x')` returns boolean if string ends with character argument
  * `.includes('x')` returns boolean if string contains character argument
  * `.repeat(x)` repeats the string **x number of times** in the same line

## Arrow functions

* Arrow operator points from the argument declaration to the return statement
  * Parenthesis used for multiple arguments
* If function requires multiple lines or return is **not implicit**, curly braces required
* Share the surrounding `this` keyword
  * Don't get their own `this` keyword
  * Inherit the `this` keyword from their surrounding function
  * Known as a **lexical** `this` keyword
* Therefore, arrow functions can be used inside objects to allow the `this` keyword to refer to the object

## Destructuring

* Allows writing of elements of an array to their own individual variables

```
const [name, age] = ['John', 26];
```

* Also works with objects, where assigning a destructor with curly braces to the name of the overall objects
  * Can reassign the variable names with a colon

```
const obj {
  firstName: "John",
  lastName: "Smith"
}

const {firstName: a, lastName: b} = obj;

console.log(a)

// output: John
```

## Arrays

* In ES5, `document.querySelectorAll` returned a **node list** instead of an array
* Had to convert this to an array using `Array.prototype.slice.call()`
* In ES6, can use `Array.from()`
  * Coupled with arrow functions, this reduces lines needed significantly

* In ES5, loops could only have `break` or `continue` statements if used inside a `for` loop
  * Cannot use inside a `.map()` or `.forEach*()` method
* In ES6, can use `for of`

```
for (const cur of boxesArr) {
  if (cur.className === 'box blue') {
    continue;
  }
  cur.textContent = 'I changed to blue'
}

```

* ES6 allows a quicker way to find indexes of arrays, using `.findIndex()` with a callback function
* To find the value instead of the index, use `.find()` with the same qualifying callback function

## Spread operator

* Helps with passing the elements of an array as individual arguments into a function
* IN ES5, used `.apply()` method

```
var ages = [1,2,3,4];
var sum = addFourAges.apply(null, ages);
```

* IN ES6, can use the **spread** operator to split an array into its elements:

```
const sum = addFourAges(...ages);
```

* Can also join arrays using spread operator

```
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];
```

* Can use the spread operator on a node list, where `.querySelectorAll()` is used
  * Node list will still need converting into an array afterwards

## Rest parameters

* Rest parameters allow arbitrary number of arguments into a function
* Uses same notation as the spread operator, but functions in the opposite way
* In ES5, arguments were accessed using the `Array.prototype.slice.call()` on the `arguments` keyword inside a function
* In ES6, simply use the **rest operator**, same as spread operator, to assign a variable name to the arguments array

```
function isFullAge(...years) {
  // Some function
}

isFullAge(1990, 1999, 1965, 2016, 1987);
```

* When using declared arguments as well, in ES5 the `.slice()` method used to get the arguments array will need to be changed to skip the first elements
* In ES6, declared arguments are used as normal

## Default parameters

* In ES5, if a function constructor is called without all arguments, undefined is assigned to the remaining arguments
* Inside the function constructor, defaults are defined inside `if` statements where the input is checked against `undefined`
* In ES6, default parameters are specified with an "=" where the parameters are declared:

```
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'UK') {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}
```

## Maps

* Map is new key-value data structure
* Any primitive value, or even function or objects, can be used as the key

```
const question = new Map();

question.set('question', 'What is the name of the latest major JS version?');
question.set(1, 'ES5');
question.set(1, 'ES6');
question.set(1, 'ES2015');
question.set(1, 'ES7');
question.set('correct',3);
question.set(true, 'Correct Answer');
question.set(true, 'Wrong Answer');
```

* To retrieve data, use opposite of set which is get:

```
let questionString = question.get('question');
```

* Maps have many useful methods, such as `.has()`, `.size()` and `.delete()`
* Maps can be looped through using `.foreach()` and `for of`

## Classes

* Make it easier to implement inheritance

```
class Person {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    ...
  }

  static greeting() {
    ...
  }

}

const John = new Person('John', 1990, 'teacher');
```

* Under the hood, this is exactly the same as a function definition
* Static methods are not inherited by class instances
* Class definitions are not hoisted
* Can only add methods to classes, not properties

## Inheritance

* In ES5, this would be done using function constructors
* A new function constructor would call the 'superclass' using the `.call()` function
* The prototype of the new subclass will need to be set equal to `Object.create()` of the prototype of the superclass
* In ES6, simply use `extends` keyword to mention the superclass in the class declaration
* Inside the constructor, use the `super()` method with the superclass arguments so that the top level arguments are still processed
