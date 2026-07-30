import {supabase} from '../DB/budgetAlocationDB.js'

const TABLE = "transactions"

export async function getAllTransactions(budgetId){
    
    const result = await supabase.from(TABLE).select().eq("budgetId", budgetId)
    return result
}

export async function createTransaction(budgetId, amount, reason){
    const result = (await supabase.from(TABLE).insert({budgetId ,amount, reason}).select().single());

    
    return result
}