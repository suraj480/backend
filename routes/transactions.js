const { deleteExpense, getExpense, addExpense } = require('../controllers/expenses')
const { addIncome, getIncomes, deleteIncomes } = require('../controllers/income')

const router = require('express').Router()
router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id',deleteIncomes)
    .post('/add-Expense',addExpense)
    .get('/get-Expense',getExpense)
    .delete('/delete-expense/:id',deleteExpense)
module.exports = router