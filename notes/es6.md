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
