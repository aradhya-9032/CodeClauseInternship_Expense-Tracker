


// script.js
let expenses = [];

function addExpense() {
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const description = document.getElementById("description").value;

    if (date && category && !isNaN(amount) && description) {
        const expense = { date, category, amount, description };
        expenses.push(expense);
        updateExpenseList();
        updateTotalExpenses();
        clearInputs();
    } else {
        alert("Please fill in all fields with valid data.");
    }
}

function updateExpenseList() {
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";

    expenses.forEach((expense, index) => {
        const row = expenseList.insertRow();
        row.innerHTML = `
            <td>${expense.date}</td>
            <td>${expense.category}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td>${expense.description}</td>
            <td>
                <button onclick="editExpense(${index})"><i class="fas fa-edit"></i></button>
                <button onclick="deleteExpense(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
    });
}

function updateTotalExpenses() {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    document.getElementById("total-expenses").textContent = `$${totalExpenses.toFixed(2)}`;
}

function clearInputs() {
    document.getElementById("date").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
}

function editExpense(index) {
    // Implement edit functionality as needed
    // You can pre-fill the form fields with the expense data for editing
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenseList();
    updateTotalExpenses();
}

// Initial setup
updateExpenseList();
updateTotalExpenses();

