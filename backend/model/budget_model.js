// budget model 

const mongoose = require('mongoose');
const User = require('./user_model');
const budgetSchema = new mongoose.Schema({
  user: {  // Reference the owner of the budget
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true 
  },
  username:{
    type: String,
    required: true
  },
  name: {  // Budget name (e.g., "Monthly Budget", "Vacation Fund")
    type: String,
    required: true,
    trim: true
  },
  period: { // Budgeting period (e.g., "monthly", "weekly")
    type: String,
    enum: 'monthly',
    default: 'monthly'
  },
  startDate: { // Optionally track the start date
    type: Date
    //  first of every month
  },
  income: { 
    type: Number,
    required: true,
    default: 0
  },
  categories: [{ // Array of expense categories 
    name: {
        type: String,
        required: true
    },
    limit: {
        type: Number,
        required: true
    }
  }]
}, {
  timestamps: true, // Automatically add 'createdAt' and 'updatedAt' fields
});

module.exports = mongoose.model('Budget', budgetSchema);
