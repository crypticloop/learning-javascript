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
