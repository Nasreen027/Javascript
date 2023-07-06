const budgetForm = document.querySelector("#budget-form");
const budgetInput = document.querySelector("#budget-input");
const expenseInput = document.querySelector("#expense-input");
// console.log(expenseInput,'expenseInput');
// const expenseTitle = document.querySelector(".expense-title");
// console.log(expenseTitle,'expenseTitle');
const expenseForm = document.querySelector("#expense-form");
// console.log(expenseForm,'expenseForm');
const amountInput = document.querySelector("#amount-input");
const expenseList = document.querySelector(".expense-list");
const budgetAmount = document.querySelector("#budget-amount");
const expenseAmount = document.querySelector("#expense-amount");
// const getAllExpenses = document.querySelectorAll(".expense-amount");

budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const budgetInputValue = budgetInput.value;
    // console.log(budgetInputValue,'budgetInputValue');
    if (!budgetInputValue) {
        alert("Please first add a budget");
        return;
    }
    else {
        budgetAmount.innerHTML = budgetInputValue;
        expenseForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const amountInputValue = amountInput.value;
            const expenseInputValue = expenseInput.value;
            // console.log(expenseInputValue,'expenseInputValue');
            // console.log(expenseInputValue,'expenseInputValue');
            if (!amountInputValue) {
                alert("no additional expense found");
                return;
            }
            else {
                checkExpenseAmout(amountInputValue, budgetInputValue, expenseInputValue);
            };
            // appendBudget(budgetInputValue);


        });
    };
});
function checkExpenseAmout(amountInputValue, budgetInputValue, expenseInputValue) {
    // console.log(budgetInputValue, 'budgetInputValue');
    // console.log(expenseInputValue, 'expenseInputValue');
    const expense = parseFloat(amountInputValue);
    const budget = parseFloat(budgetInputValue)

    if (expense <= budget) {
        // console.log(eval(budget-expense) , 'expenseAndBudget');
        appendBudget(amountInputValue, expenseInputValue);
    }
    else {
        alert("budget is low");
        return;
    };
};

function appendBudget(amountInputValue, expenseInputValue) {
    // console.log(expenseInputValue,'expenseInputValue');
    // console.log(budgetInputValue, 'budgetInputValue');
    // console.log(amountInputValue,'amountInputValue');
    const expenseElement = document.createElement("div");
    expenseElement.classList = `expense-item d-flex justify-content-between align-items-baseline`;
    expenseElement.innerHTML = `<h6 class="expense-title mb-0 text-uppercase list-item">${expenseInputValue}</h6>
        <h5 class="expense-amount mb-0 list-item">${amountInputValue}</h5>
        <div class="expense-icons list-item">
         <a href="#" class="delete-icon" data-id="${expense.id}">
          <i class="fas fa-trash"></i>
         </a>
        </div>`;
    // console.log(expenseElement,'expenseElement');
    expenseList.append(expenseElement);
    bindDeleteTaskIcon();
    addAllExpenses(amountInputValue);
    // makeArrayOfExpenses(amountInputValue);
    // pushExpenses(amountInputValue);
    // console.log(expenseInputValue,'expenseInputValue');
};

function bindDeleteTaskIcon() {
    const selectAllDeleteIcons = document.querySelectorAll(".delete-icon");
    // console.log(selectAllDeleteIcons,'selectAllDeleteIcons');
    selectAllDeleteIcons.forEach(function (singleDeleteIcon) {
        singleDeleteIcon.addEventListener("click", removeTaskHandler);
        // console.log(singleDeleteIcon,'singleDeleteIcon');
    });
};

function removeTaskHandler(event) {
    event.preventDefault();
    const currentDeleteIcon = event.target;
    // console.log(currentDeleteIcon,'currentDeleteIcon');
    if (confirm("Are you sure?")) {
        const selectDeleteIcon = currentDeleteIcon.parentElement.parentElement.parentElement;
        selectDeleteIcon.remove();
    };
};
function addAllExpenses(amountInputValue) {
    const amountInputValue = amountInputValue;
    const getExpenseValues = amountInputValue;
    console.log(getExpenseValues, 'getExpenseValues');
}

    // function makeArrayOfExpenses(amountInputValue){ 
    //     // console.log(amountInputValue,'amountInputValue');
    //     // getExpenseValues.push(...[getExpenseValues]);
    //         // const getAllExpenseValues = [...amountInputValue];
    //         if (getExpenseValues) {
    //             let singleExpenseValue = [...getExpenseValues];
    //             // console.log(getExpenseValues,'getExpenseValues');
    //           return JSON.parse(getExpenseValues);
    //         }
    //         else {
    //           return [];
    //         };
    // };
    // function pushExpenses(amountInputValue){
    //     // console.log(amountInputValue,'amountInputValue');
    //     const oldExpenses = makeArrayOfExpenses();
    //     oldExpenses.push(amountInputValue);
    //     console.log(oldExpenses,'oldExpenses');
    //     // const stringifyAnArray = JSON.stringify(oldExpenses);
    //     // console.log(stringifyAnArray,'stringifyAnArray');
    // };