const IncomeSchema = require("../models/IncomeModel")
exports.addIncome = async = async (req, res) => {

    const { title, amount, category, description, date } = req.body
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try {
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are require!' })
        }
        if (typeof amount !== "number" || amount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number' });
        }
        await income.save()
        res.status(200).json({ message: "Income Added" })
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }

    console.log(income)
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })

    }
}

exports.deleteIncomes = async (req, res) => {
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id).then((income) => {
        res.status(200).json({ message: "Income Deleted" })
    }).catch((err) => {
        res.status(500).json({ message: "Server error" })
    })
}