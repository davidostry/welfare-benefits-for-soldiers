import { showAllTransactions } from '../SERVICE/spendTransactionService.js'

export async function getAllTransactions(req, res, next) {
    try {
        const { id } = req.params
        const result = showAllTransactions(id)
        if (!result) return res.status(404).json({message: "budget not found"});
        return res.json({data: result})

    } catch (error) {
        next(error)
    }
}