import { getAllTransactions, createTransaction } from '../DAL/spendTransactionRepo.js'

export async function showAllTransactions(id){
    
    return await getAllTransactions(id)
}

export async function addTransaction(id, amount, reason){

    return await createTransaction(id, amount, reason)

}
