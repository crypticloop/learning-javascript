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

`document.querySelector('#cheese').innerHTML('<strong>RAGE</strong>');
