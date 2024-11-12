// script.js
document.getElementById('transaction-form').addEventListener('submit', addTransaction);

let totalAmount = 0;

function addTransaction(event) {
    event.preventDefault();
    
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    
    const transactionTable = document.getElementById('transaction-table').getElementsByTagName('tbody')[0];
    const newRow = transactionTable.insertRow();
    
    newRow.insertCell(0).textContent = date;
    newRow.insertCell(1).textContent = description;
    newRow.insertCell(2).textContent = amount.toFixed(2);
    newRow.insertCell(3).textContent = type;
    
    if (type === 'credit') {
        totalAmount += amount;
    } else {
        totalAmount -= amount;
    }
    
    const totalCell = newRow.insertCell(4);
    totalCell.textContent = totalAmount.toFixed(2);
    totalCell.classList.add(type === 'credit' ? 'total-credit' : 'total-debt');
    
    document.getElementById('transaction-form').reset();
}
