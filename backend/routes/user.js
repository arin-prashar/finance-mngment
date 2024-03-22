const express=require('express');
const registerUser=require('../controller/userRegister');
const authentication=require('../middleware/authentication')
const createBudget  = require('../controller/budget');
const expenseTracker=require('../controller/expense_tracker')

const router=express.Router();

// Register User
router.post('/registerUser',registerUser.register);
router.get('/login',(req,res,next)=>{
    res.sendFile("/home/dkg/Study/finance-mngment/src/landing/LoginPage-main/login.html");
});
//Budget Tools
router.post('/createBudget',authentication.authorization,createBudget.create_budget);

//expense Tracker
router.post('/createExpense',expenseTracker.create);
router.get('/displayExpenses',expenseTracker.findAll);
router.delete('/deleteExpense',expenseTracker.delete);
router.put('/updateExpense',expenseTracker.edit);

module.exports = router;
