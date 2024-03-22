const openExpenseFormButton = document.getElementById('openExpenseFormButton');
const expenseForm = document.getElementById('expenseForm');
const submitExpense = document.getElementById('submitExpense');
const budgetsContainer = document.getElementById('budgetsContainer');

openExpenseFormButton.addEventListener('click', () => {
  expenseForm.style.display = 'block';
});

submitExpense.addEventListener('click', () => {
  const expenseName = document.getElementById('expenseName').value;
  const expenseDescription = document.getElementById('expenseDescription').value;
  const expenseAmount = document.getElementById('expenseAmount').value;

  createExpenseCard(expenseName, expenseDescription, expenseAmount);
  expenseForm.style.display = 'none';
});

function createExpenseCard(name, description, amount) {
  const card = document.createElement('div');
  card.classList.add('expenseCard');
  card.innerHTML = `
    <h3>${name}</h3>
    <p>${description}</p>
    <p>Amount: $${amount}</p> 
    <button class="deleteButton">Delete</button>
    <button class="updateButton">Update</button> 
  `;

  budgetsContainer.appendChild(card);

  // Add event listeners for 'deleteButton' and 'updateButton' here
  card.querySelector('.deleteButton').addEventListener('click', () => {
    card.remove(); 
  });

  card.querySelector('.updateButton').addEventListener('click', () => {
    openUpdateForm(card, name, description, amount); 
  });
}