Objects and Functions
=======

## Overview

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
* **A child's prototype is the parent's prototype property**

* When we look for a method in an object, JS first looks for that method in that object
* If it can't find it, it will look in that object's prototype, which is the prototype property of its parent
  * Moves up the prototype chain
* It will continue moving up the chain until it either finds the object or reaches `null`
* If it reaches `null`, it will return `undefined`
