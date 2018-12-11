Budget App Notes
===

# Clearing UI elements

* After the event handler is hit and `addItem` and `addListItem` is called, the input fields need to be cleared
* Method added to the `UIController` as it is a UI issue
  * Is added as a public method as it will need to be returned to the controller module

* Uses `document.querySelectorAll`
* Takes a string defining some css objects as an input, and if multiple objects are referenced, these are separated with ', '
* This method returns a list of the fields which have been selected
* In order to convert this into an array, need to use `.call` on the array method `.slice()`

# Input Validation

* Best place to do this is inside the event handler
* When input is parsed, must have the following qualities:
  * String must be non empty
  * Value must be positive
  * Value must be a number

* Solving 'value must be a number' is simple, as can use conversion when reading the input into the data object
* Need to use `parseFloat` on `value` entry into the `data` object

* For all three above points, if any are violated then the input should not be added to the `data` object
* Therefore, an `if` statement is placed inside `ctrlAddItem`

# Event Bubbling and Delegations

* When an event is triggered on an element, it is triggered on all the parent elements up to the root `html` element
* This is known as event **bubbling**
* The element on which the event was first fired is called the target element
  * This is stored as a property in the event object
* Therefore, when an event bubbles up, all of the parent elements in the DOM tree know what the original target was
* This means we can perform **event delegation** by adding an event handler to a parent element and waiting for the event to bubble up
* Delegation allows you to:
  * Have an event handler for many elements, only written once on the parent
  * Attach an event handler to an object which is not in the DOM when the page is first loaded


# Removing elements

* Cannot simply remove an element in Javascript
* Instead, have to go to the parent, and then remove the child
* This and other processes are explained [here|https://blog.garstasio.com/you-dont-need-jquery/]
