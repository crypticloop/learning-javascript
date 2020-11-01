// Function contstructor

let john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};


let john = new Person('John', 1990, 'teacher');
