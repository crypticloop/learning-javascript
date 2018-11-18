Objects and Functions
=======

## Prototypes

* Everything is an object (almost)
* Everything is either a primitive or an object
  * Allows object oriented programming
* Constructors or prototypes are blueprints for creating objects
  * Called classes in other languages, and sometimes in JS as well
* Inheritance is when properties of one object are passed onto another

* Javascript is prototype based language
* Inheritance possible through the prototype property
  * Every object has this prototype property

* If an instance is to inherit a method/property from its constructor object
  * That method/property has to be added to the constructor's prototype property
* Every object is an instance of the object object
  * This object object has many methods in its prototype property
* All objects will inherit these methods, which are e.g.:
  * toString()
  * valueOf()
* **A instances's prototype is the parent's prototype property**

* When we look for a method in an object, JS first looks for that method in that object
* If it can't find it, it will look in that object's prototype, which is the prototype property of its parent
  * Moves up the prototype chain
* It will continue moving up the chain until it either finds the object or reaches `null`
* If it reaches `null`, it will return `undefined`

## Creating objects

* There are a few different ways to do this
* Most popular way is using a function constructor
  * Pattern for writing a blueprint
* Function is used
  * Convention is that these start with a capital letter
* Parameters are variables to be set in the object
* Inside the object, simply assign the `this.`each variable, and set it to the value of the variable, e.g.:

`let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job
  }`

* Function instantiation is then called with:

`let john = new Person('John',1990,'teacher')`

* `new` operator creates a brand new empty object
* Then the `Person(...)` function is called
* Calling a function creates a new execution context, which has a `this` variable
  * in a regular function call, the `this` variable points at the global object
* `new` operator changes the behaviour in this case
  * Forces the `this` variable to point at the empty object which it creates
* Can add functions both inside the object constructor, or outside by calling the `.prototype` method on the top level object itself

## Viewing objects in the browser

* Write the name of the object into the console
  * Use drop-downs to show all the object properties
* There will also be a `proto` field which can be expanded
* This shows the `prototype`  property of the top object constructor
* `.hasOwnProperty` function, which can be called on any object, will return whether a property is inherited from the constructor's prototype property, or if it was declared in the constructor
* For an array, all methods are stored in the array `prototype` property
  * **APART FROM `.length()`**
  * This is created as an object property when the array is instantiated

## Creating Objects

* Can use `Object.create`, and then go through and specify the properties separately
* This is verbose and could take a long time
* instead, can pass a second argument to `Object.create`, with an object to define the values
* Requires special syntax, e.g.:

`var jane = Object.create(personProto,
  {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
    });`

* Object.create builds object which inherits directly from object passed into first argument
  * Provides more control over the prototype property
* Using a function constructor means that new object inherits from constructor's prototype property

## Primitives and Objects

* Primitives are:
  * numbers
  * strings
  * booleans
  * undefined
  * null
* Variables containing primitives hold the data inside of the variable itself
* Variables associated with objects do not actually contain the objects
  * Contain reference to where in memory the object is stored
* If an object is instantiated, and then another is instantiated and set equal to the first object, changing the value of the first will change the value of the second
* The same thing happens with functions
* Passing a primitive to a function will only change the value of this variable inside the function
  * It will remain unchanged outside the function
* However passing an object to a function and mutating it will change the object in the global scope
  * This is because the object is **passed by reference** into the function

## Passing functions as arguments

* Functions are also objects
* Function is an instance of the object type
* Known as **first class functions**
* Callback functions are functions that are passed into functions, to be called later
* When passing a callback function, simply use placeholders for the arguments and the normal function syntax inside the function

## Functions returning functions

* After return, specify an anonymous function
  * These anonymous functions can have arguments
* A good example is a string argument that scans an `if {...} else{...}` statement, and depending on the result returns different functions
* These return functions can take an argument that is not specified in the top level function
  * As long as the argument is passed in somewhere, it can travel down the call of functions to be applied in the correct place
* Double parenthesis syntax can even be used, as is in following example:

`function topLevelPrint(selector) {
  if (selector === x) {
    return function(specifier) {
      console.log('This is x-selected, and ' + specifier + ' specified')
    }
  } else {
    return function(specifier) {
      console.log('This is misc-selected, and ' + specifier + ' specified')
    }
  }
}

topLevelPrint('x')('exampleSpecifier1')`

## Immediately Invoked Function Expressions (IIFE)

* Used to hide a variable from the global scope
* Write a function without a name inside parenthesis, and then call it with the arguments directly after the parenthesis close
* Tricks the Javascript parser into believing that the function declaration is an expression
  * Use parenthesis as in JS, what is inside parenthesis cannot be a statement
* Can only call an IIFE once
  * Just used for data privacy

## Closures

* Closures involve being able to use variables in an outer scope even after a function has stopped its execution
* **Inner function always has access to variables and parameters of outer function, even after outer function has returned**
* Even after a function is returned, the scope chain (pointer to variable objects of just called function) remains
* Execution context has 'closed in' on the variables from the surrounding functions
* This is built into Javascript
* Allows a generic function to be used to create more specific functions

## Bind, call and apply

* Call method allows you to call the function from inside one object on another object
* Start by calling the function from the original object as normal, but don't pass any arguments yet
* Then add `.call`, whose first argument is always the object to which  the `this` variable should be assigned
  * e.g. the name of the object you want to perform the method on
* Then add the remaining arguments as normal
* This is called **method borrowing**

* Can also use the `.apply` method, which accepts the first arguments (reassignment for `this`) as normal, and then the rest of the arguments in an array
  * This will only work if the method being borrowed is intending to receive an array as an input

* Bind method also allows the `this` property to be set explicitly
* Creates a copy of the function instead of immediately calling it
* When using `.bind`, you can set some of the arguments for a method that is being borrowed, and store this in a function
  * The use of this is that you can then create a function which is a copy of the original, but with one argument already specified
  * Useful to avoid repeating yourself
* This is called **carrying**, and using `.bind` is a way of doing this
