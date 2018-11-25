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

let UIController = (function() {

  // Some code

})();

let controller = (function(budgetCtrl, UICtrl) {

// Some code

})(budgetController, UIController);
