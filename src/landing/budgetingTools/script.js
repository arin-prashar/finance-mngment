const openFormButton = document.getElementById('openFormButton');
const budgetForm = document.getElementById('budgetForm');
const submitBudget = document.getElementById('submitBudget');
const budgetsContainer = document.getElementById('budgetsContainer');

openFormButton.addEventListener('click', () => {
  budgetForm.style.display = 'block';
});

submitBudget.addEventListener('click', () => {
  const budgetName = document.getElementById('budgetName').value;
  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;
//   const period = document.getElementById('period').value;
  const startDate = document.getElementById('startDate').value;

  createBudgetCard(budgetName, category, amount, startDate);
  budgetForm.style.display = 'none'; 
});

function createBudgetCard(name, category, amount, startDate) {
  const card = document.createElement('div');
  card.classList.add('budgetCard');
  card.innerHTML = `
    <h3>${name}</h3>
    <p>Category: ${category}</p>
    <p>Amount: $${amount}</p> 
    ${startDate ? `<p>Start Date: ${startDate}</p>` : ''} 
  `;
  budgetsContainer.appendChild(card);
}