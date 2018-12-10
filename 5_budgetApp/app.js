let budgetController = (function() {



})();






let UIController = (function() {

  let DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'

  }


  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();







let controller = (function(budgetCtrl, UICtrl) {

  let DOM = UICtrl.getDOMstrings();

  let ctrlAddItem = function() {
    let input = UICtrl.getInput();
    console.log(input);
    // add item to the budget controller
    // add item to the UI
    // calculatek the budget
    // display the budget on the UI
  }



  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

  document.addEventListener('keypress', function(event) {
    if(event.keyCode == 13 || event.which == 13)  {

      ctrlAddItem();

    }
  })

})(budgetController, UIController);
