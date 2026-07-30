import { getAllTransactions, createTransaction } from '../DAL/spendTransactionRepo.js'

export async function showAllTransactions(id){
    
    return await getAllTransactions(id)
}

export async function addTransaction(id, amount, reason){
    const remainingAmount = 5000
    if(remainingamount-amount <= 0){
        const error = new Error("not enoth budget")
        error.statusCode(409)
        throw error
    }

    return await createTransaction(id, amount, reason)

}
