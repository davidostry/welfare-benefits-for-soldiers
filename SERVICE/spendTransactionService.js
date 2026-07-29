import { getAllTransactions } from '../DAL/spendTransactionRepo.js'

export async function showAllTransactions(id){
    
    return await getAllTransactions(id)
}

