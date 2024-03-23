const express=require('express');
const registerUser=require('../controller/userRegister');
const authentication=require('../middleware/authentication')
const createBudget  = require('../controller/budget');
const expenseTracker=require('../controller/expense_tracker')
const cors=require('cors');

const router=express.Router();

// Register User
router.post('/registerUser',cors(),registerUser.register);
router.get('/login',(req,res,next)=>{
    var path = require('path');
    res.sendFile(path.resolve('LoginPage/login.html'));
});
//Budget Tools
router.post('/createBudget',authentication.authorization,createBudget.create_budget);
router.get('/getBudgets',createBudget.getBudget);
router.put('/updateBudget',createBudget.updateBudget);
router.delete('/deleteBudget',createBudget.delete_budget);

//expense Tracker
router.post('/createExpense',expenseTracker.create);
router.get('/displayExpenses',expenseTracker.findAll);
router.delete('/deleteExpense',expenseTracker.delete);
router.put('/updateExpense',expenseTracker.edit);

module.exports = router;