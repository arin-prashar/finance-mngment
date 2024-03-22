const express=require('express');
const registerUser=require('../controller/userRegister');
const authentication=require('../middleware/authentication')
const createBudget  = require('../controller/budget');

const router=express.Router();

router.post('/registerUser',registerUser.register);
router.post('/createBudget',authentication.authorization,createBudget.create_budget)

module.exports = router;