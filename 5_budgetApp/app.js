let budgetController = (function() {



})();

let UIController = (function() {

  // Some code

})();

let controller = (function(budgetCtrl, UICtrl) {

  document.querySelector('.add__btn').addEventListener('click', function() {
    console.log('Button was clicked');
  })

})(budgetController, UIController);
