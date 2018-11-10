DOM and DOM manipulation
=======

* DOM is the document object model
* Structured representation of HTML
* Used to connect web pages to scripts
* For each object inside a webpage, i.e. for anything surrounded by attribute tags, there is an object in the DOM
* JS interacts with the DOM using special methods
  * They are methods because they are functions attached to the document object

## Replacing Web Page Content

* First we need to call the document object:

`document.`...

* Then need to call one of the method which allows the JS to connect to an object inside of a webpage
* Example of this is `querySelector(string)`
  * `string` is a string which a CSS identification of an HTML object
  * e.g. identifying an id called 'cheese' with `#cheese`
* JS now looks like:

`document.querySelector('#cheese').`...

* Now need to call function to alter this information
* One example is `.textContent`, which replaces the text content with a string
* Another is `.innerHTML`
  * This takes a string which is injected into this HTML object and interpreted as raw HTML
* To add in the word **RAGE** (in bold), the JS would read:

`document.querySelector('#cheese').innerHTML('<strong>RAGE</strong>')`;

* To change the CSS property of an object, use `.style.`... and then insert the property to be changed
* E.g. to change the _display_ property of the cheese id to _none_:

`document.querySelector('#cheese').style.display = 'none'`;

## Reading from the DOM

* This is very simple, just omit 'writing' method from the end of above line, and store this to a variable:

`let cheese = document.querySelector('#cheese').textContent`

## Events

* Notifications sent to the code to notify it that something has happened on the webpage, e.g.
  * clicking a button
  * resizing a window
  * scrolling
* Event listeners are functions which wait for an event and then perform an action
* Event can only be processed and handled once the execution stack is empty
  * These are loaded up in the message queue in the meantime
  * When they are added to their stack, they get their own execution context
* Full list of events are found [here][https://developer.mozilla.org/en-US/docs/Web/Events]
