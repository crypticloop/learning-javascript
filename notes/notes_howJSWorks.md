How Javascript Works
======

## Overview

* Always runs inside of an environment
* This is normally a browser or alike
* Can also be hosted on a Node.js web server

The following process is carried out inside the host:
1. Host takes code and puts it into JS engine
2. Code is read line by line by a **Parser**
3. If there are any errors, the parser throws these errors
4. If this is successful, the parser outputs an Abstract syntax tree
5. This is then converted into machine code
6. This machine code is then run

* Different engines do this in different ways

## Execution contexts

* All code needs to run in an environment
* These are called execution contexts
  * Is like a box or container where code evaluated and executed
* Default is the global context
  * For variables and functions not inside any other functions
* Global context is associated with the global object
  * In the browser, this is the window object
  * `lastName === window.lastName` will be `true`
* Each time a function is called, it gets its own execution context
  * Execution contexts are stacked last in, first off

## Creation and execution phases and hoisting

* Each execution context should be looked at as an object
* Three properties:
  * Variable object (VO) - contains all of the function and variable declarations
  * Scope chain - contains current variable objects, as well as those of it parents
  * 'This' variable
* When an execution object is added to the stack, it is done in 2 phases
  * Creation phase - creates all the properties listed above
  * Execution phase - code run line by line

### Creation phase

1. Argument object created, contains all arguments passed to function
2. Code scanned for function declarations
3. for each - property created in VO pointing to function
4. Code scanned for variable declarations
5. for each - property created in VO and set to undefined

* This is called hoisting i.e. they are defined before execution
* Functions seem to be _more hoisted(?)_ because they are fully defined
* Different to variables, which are assigned 'undefined'

What this all means is that a function can be 'called' before it is 'declared' in terms of location in the code, because the creation phase has created a property in the VO pointing to the function, so when it comes to execution, the function is available.

This will only work for function declarations, **not function expressions**. This is because the expression is assigned to a variable, for which the corresponding property is only set to `undefined` during creation.

If you hoisted a variable, it will not express that the variable cannot be found i.e. throw an error, but only that it is undefined.

It is also important to remember in which execution context variables will be stored, i.e. are they stored in global, or inside a function. This will help when thinking about the scope of assigning values to variables.

## Scoping & Scope Chain

* Scoping answers the question: _where can we access a variable/function?_
* Each new function creates a scope
  * Space/environment in which the variables it defines are accessible
* N.B. in Javascript, new scopes are **NOT CREATED for if, for or while blocks**
* Javascript has Lexical scoping, a function lexically within another function has access to the outer function's scope
* The progression of these scopes through outer layers is called 'The Scope Chain'
* **This does not work backwards!**
  * Locally scoped variables cannot be accessed from their parent scopes
  * For this to be possible, they need to be returned from their functions
* Once a scope chain has been decided, this will be sent to the VO to tell it what variables to which it has access
* Important to note that the execution stack and scope chain are different things!
  * Execution stack is the order in which functions are called
  * Scope chain is order in which functions are lexically written
