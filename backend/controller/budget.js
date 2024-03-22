// budget management
// student can set monthly budgets for each category

const Budget = require('../models/budget_budget');
const User = require('../models/user_model');

// Create a new budget catergory
exports.create_category = async (req, res) => {
  try {
    const budget = new Budget({
      categories: req.body.categories
    });
    await budget.save();
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
expors.deleteCategory = async (req, res) => {
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

exports.new_user = async (req, res) => {
    try{
        const budget = new Budget({
            username: req.body.username,
            name: req.body.name,
            income: req.body.income,
            categories: "None"
        });
        await budget.save();
        res.status(201).send(budget);
    }
    catch (error) {
        res.status(400).send(error);
}};

