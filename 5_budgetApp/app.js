let budgetController = (function() {

  let Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  let Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  let data = {
    allItems: {
      expense: [],
      income: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }

  return {
    addItem: function(type, des, val) {
      let newItem, ID;

      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length-1].id + 1
      }
      else {
        ID = 0;
      }

      if (type === 'expense') {
        newItem = new Expense(ID, des, val);
      }
      else if (type === 'income') {
        newItem = new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);
      return newItem;
    },
    testing: function() {
      console.log(data);
    }
  }


})();

let UIController = (function() {

  let DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list'

  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    addListItem: function(obj, type) {
      let html, newHtml, element;

      if (type === 'income') {

        element = DOMstrings.incomeContainer;

        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

      } else if (type === 'expense') {

        element = DOMstrings.expenseContainer;

        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div';

      }

      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);

      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

    },

    clearFields: function() {
      let fields, fieldsArr;

      fields = document.querySelectorAll(DOMstrings.inputDescription + `, ` + DOMstrings.inputValue);

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(current, index, array) {
        current.value = "";
      });

      fieldsArr[0].focus();
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();

let controller = (function(budgetCtrl, UICtrl) {

  let setupEventListeners = function() {

    let DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if(event.keyCode == 13 || event.which == 13)  {
        ctrlAddItem();
      }
    });
  }

  let ctrlAddItem = function() {

    let input, newItem;

    input = UICtrl.getInput();
    console.log(input);

    newItem = budgetCtrl.addItem(input.type, input.description, input.value)

    UICtrl.addListItem(newItem, input.type);

    UICtrl.clearFields();

    // calculatek the budget
    // display the budget on the UI
  };

  return {
    init: function() {
      console.log("Application has started");
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();
