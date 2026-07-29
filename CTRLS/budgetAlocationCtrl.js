import { addBudget, showBudgets } from '../SERVICE/budgetAlocationService.js'

export async function createBudget(req, res, next) {
    try {
        const budget = req.body
        const result = await addBudget(budget)
        if (!result) return res.status(409).json({ message: "budget is already exists" });
        return res.status(201).json({ data: result })
    } catch (e) {
        next(e)
    }
}

export async function getBudgets(req, res, next) {
    try {
        const { unit, month, benefitType } = req.query

        const result = await showBudgets(unit, month, benefitType)
        if (!result) return res.status(400).json({ message: "failed to get budgets" });
        return res.json({ data: result })

    } catch (error) {
        next(error)
    }
}