Modules
======

* Used to split up tasks for a project into achievable chunks
* One way of splitting these up is into:
  * UI module
  * Data module
  * Controller module
* Each has variables and functions which are private or public
  * Called data encapsulation

# Module Pattern

* The module pattern is powerful and simple
* Module written by assigning a variable to an IIFE which returns an object
* IIFE creates new scope not available to outside scope
* Modules use this to immediately protect their data
* Module returns object of all of the functions that want to be made public
* Inside the IIFE, the return will look something like:

```
let budgetController = (function() {

  let x = 23;

  let add = function(x) {
    return x + a;
  }

  return {
    publicTest: function(b) {
      console.log(add(b));
    }
  }


  })();
```

* This goes directly into the top level javascript file
* `publicTest` method will be the only one that is publicly exposed and available
* The use of `publicTest` is enabled through closures
* The next module is declared in the same file, as it is a separate IIFE and so will not interfere with the first module's scope
  * This compartmentalisation is called **separation of concerns**

* To carry out operations which link the outputs of two separate modules, need to create another module
* This will take two inputs into the IIFE
  * These will be specified in the final parenthesis as the other controllers:

```
let controller = (function(budgetCtrl, UICtrl) {

// Some code

})(budgetController, UIController);
```

* Still need to make sure that an object is returned with all the public facing methods to be accessed

# Reading input data

* Always want to read this from a UI controller module
* Can then pass this into the controller module to be actioned
  * In order for this data to be passed to other modules, it must be returned as a function inside the return object of the module

# Initialisation functions

* Function to be run as soon as the app is started
* This should:
  * Set up all the event listeners
  * Be run by reference from the controller module, but in the document scope
