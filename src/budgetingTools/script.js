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
      <button class="deleteButton">Delete</button> 
      <button class="updateButton">Update</button> 
    `;
  
    budgetsContainer.appendChild(card);
  
    // Add event listener to the new delete button
    card.querySelector('.deleteButton').addEventListener('click', () => {
      card.remove(); // Remove the card element
    });
  }

  function openUpdateForm(card, name, category, amount, startDate) {
    // Create the update form dynamically
    const updateForm = document.createElement('div');
    updateForm.id = 'updateForm';
    updateForm.innerHTML = ` 
      <h2>Update Budget</h2>
      <label for="updateBudgetName">Budget Name:</label>
      <input type="text" id="updateBudgetName" value="${name}"><br>
  
      <label for="updateCategory">Category:</label>
      <input type="text" id="updateCategory" value="${category}"><br>
  
      <label for="updateAmount">Amount:</label>
      <input type="number" id="updateAmount" value="${amount}"><br>
  
      <label for="updateStartDate">Start Date (Optional):</label>
      <input type="date" id="updateStartDate" value="${startDate || ''}"><br> 
  
      <button id="updateSubmit">Update</button> 
    `;
  
    document.body.appendChild(updateForm); // Add the update form to the page
  
    updateForm.querySelector('#updateSubmit').addEventListener('click', () => {
      updateCard(card);
      updateForm.remove(); // Remove the update form after submission
    });
  }
  
  function updateCard(card) {
    const updatedName = document.getElementById('updateBudgetName').value;
    const updatedCategory = document.getElementById('updateCategory').value;
    const updatedAmount = document.getElementById('updateAmount').value;
    const updatedStartDate = document.getElementById('updateStartDate').value;
  
    card.querySelector('h3').textContent = updatedName;
    card.querySelectorAll('p')[0].textContent = 'Category: ' + updatedCategory; // Assuming first <p> is category
    card.querySelectorAll('p')[1].textContent = 'Amount: $' + updatedAmount; // Assuming second <p> is amount
  
    if(updatedStartDate) {
      card.querySelectorAll('p')[2].textContent = 'Start Date: ' + updatedStartDate; // Assuming third <p> is start date
    }
  }