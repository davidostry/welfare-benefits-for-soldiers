import { showAllTransactions, addTransaction } from '../SERVICE/spendTransactionService.js'

export async function getAllTransactions(req, res, next) {
    try {
        const { id } = req.params
        const result = await showAllTransactions(id)
        if (!result) return res.status(404).json({ message: "budget not found" });
        return res.json({ data: result })

    } catch (error) {
        next(error)
    }
}

export async function createTransaction(req, res, next) {

    try {
        const { id } = req.params
        const { amount, reason } = req.body
        const result = await addTransaction(id, amount, reason)
        if(!result) return res.status(400).json({message: "failed to create transaction"});
        return res.status(201).json({data: result})

    } catch (error) {
        next(error)
    }
}