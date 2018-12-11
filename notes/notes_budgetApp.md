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
