let budgetController = (function() {



})();

let UIController = (function() {

  // Some code

})();

let controller = (function(budgetCtrl, UICtrl) {

  let ctrlAddItem = function() {
    // get input data
    // add item to the budget controller
    // add item to the UI
    // calculatek the budget
    // display the budget on the UI

    console.log("it works")
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

  document.addEventListener('keypress', function(event) {
    if(event.keyCode == 13 || event.which == 13)  {

      ctrlAddItem();

    }
  })

})(budgetController, UIController);
