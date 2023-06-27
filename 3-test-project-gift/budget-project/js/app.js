const budgetForm = document.querySelector("#budget-form");
const budgetInput = document.querySelector("#budget-input");
const expenseForm = document.querySelector("#expense-form");
// console.log(expenseForm,'expenseForm');
const expenseInput = document.querySelector("#amount-input");


budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const budgetInputValue = budgetInput.value;
    // console.log(budgetInputValue,'budgetInputValue');
    if (!budgetInputValue) {
        alert("Please first add a budget");
        return;
    }
    else {
        expenseForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const expenseInputValue = expenseInput.value;
            // console.log(expenseInputValue,'expenseInputValue');
            if (!expenseInputValue) {
                alert("no additional expense found");
                return;
            }
            else {
                checkExpenseAmout(expenseInputValue, budgetInputValue);
            }
            // appendBudget(budgetInputValue);


        })
    }
    function checkExpenseAmout(expenseInputValue, budgetInputValue) {
        console.log(budgetInputValue, 'budgetInputValue');
        console.log(expenseInputValue, 'expenseInputValue');
        const expenseAndBudget = parseFloat(expenseInputValue <= budgetInputValue);

        if (expenseAndBudget) {
            console.log(expenseAndBudget , 'expenseAndBudget');
        }
    }

    // function appendBudget(budgetInputValue) {
    //     console.log(budgetInputValue, 'budgetInputValue');


    // };

})