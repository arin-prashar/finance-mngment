// budget management
// student can set monthly budgets for each category

const Budget = require('../model/budget_model');
const User = require('../model/user_model');

// Create a new budget catergory
exports.create_category = async (req, res) => {
  try {
    const budget = new Budget.create({
      categories: req.body.categories
    });
    // await budget.save();
    console.log(budget);
    res.status(201).send(budget);
  } catch (error) {
    res.status(400).send(error);
}};

// Get user's budget using username
exports.getBudget = async (req, res) => {
  try {
    const budget = await Budget.findOne({ username: req.params.username });
    if (!budget) {
      return res.status(404).send({ error: 'User/Budget Not Found' });
    }
    res.send(budget);
  } catch (error) {
    res.status(500).send(error);
}};

// Update user's budget using username
exports.updateBudget = async (req, res) => {
  try {
    const budget = await Budget.findOne({ username: req.params.username });
    if (!budget) {
      return res.status(404).send({ error: 'User/Budget Not Found' });
    }
    budget.name = req.body.name;
    budget.income = req.body.income;
    budget.categories = req.body.categories;
    await budget.save();
    res.send(budget);
  } catch (error) {
    res.status(400).send(error);
}};

// Delete a budget category using username
exports.deleteCategory = async (req, res) => {
    try{
        const budget = await Budget.findOne({ username: req.params.username });
        if (!budget) {
            return res.status(404).send({ error: 'User/Budget Not Found' });
        }
        budget.categories = budget.categories.filter(category => category.name !== req.params.categoryName);
        await budget.save();
        res.send(budget);
    }
    catch (error) {
        res.status(400).send(error);
}};


