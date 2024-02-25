let expenses = [];

function addExpense() {
  const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
  if (!isNaN(expenseAmount)) {
    expenses.push(expenseAmount);
    updateExpenses();
  }
}

function updateExpenses() {
  const expenseList = document.getElementById('expenseList');
  const totalExpensesElement = document.getElementById('totalExpenses');

  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const listItem = document.createElement('li');
    listItem.innerText = `Expense ${index + 1}: $${expense.toFixed(2)}`;
    expenseList.appendChild(listItem);
  });

  const totalExpenses = expenses.reduce((total, expense) => total + expense, 0);
  totalExpensesElement.innerText = totalExpenses.toFixed(2);
}
