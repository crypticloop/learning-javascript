console.log("This is testing the logging")


// When declaring an object, two different notations can be used

// This method simply declares the object
let john = {
  firstName: 'John',
  secondName:'Smith'
};

// This method uses a `new Object()` constructor, better for iterating
let sarah = new Object();
sarah.firstName =  'Sarah';
sarah.secondName = 'Jones';

console.log(john);
console.log(sarah);
