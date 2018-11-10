How Javascript Works
======

## Overview

* Always runs inside of an environment
* This is normally a browser or alike
* Can also be hosted on a Node.js web server

The following process is carried out inside the host:
1. Host takes code and puts it into JS engine
2. Code is read line by line by a **Parser**
  a. If there are any errors, the parser throws these errors
  b. If this is successful, the parser outputs an Abstract syntax tree
3. This is then converted into machine code
4. This machine code is then run

* Different engines do this in different ways

## Execution contexts

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
  a. for each - property created in VO pointing to function
3. Code scanned for variable declarations
  b. for each - property created in VO and set to undefined

* This is called hoisting i.e. they are defined before execution
* Functions seem to be _more hoisted(?)_ because they are fully defined
* Different to variables, which are assigned 'undefined'
