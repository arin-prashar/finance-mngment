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
    res.sendFile("/home/dkg/Study/finance-mngment/src/landing/LoginPage-main/login.html");
});
//Budget Tools
router.post('/createBudget',cors(),authentication.authorization,createBudget.create_budget);
router.get('/getBudgets',cors(),createBudget.getBudget);
router.put('/updateBudget',cors(),createBudget.updateBudget);
router.delete('/deleteBudget',cors(),createBudget.delete_budget);

//expense Tracker
router.post('/createExpense',expenseTracker.create);
router.get('/displayExpenses',expenseTracker.findAll);
router.delete('/deleteExpense',expenseTracker.delete);
router.put('/updateExpense',expenseTracker.edit);

module.exports = router;
