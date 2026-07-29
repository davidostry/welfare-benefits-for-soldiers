import { addBudget } from '../SERVICE/budgetAlocationService.js'

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