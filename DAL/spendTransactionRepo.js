import {supabase} from '../DB/budgetAlocationDB.js'

const TABLE = "transactions"

export async function getAllTransactions(id){
    
    const result = await supabase.from(TABLE).select().eq("budgetId", id)
    return result
}

export async function createTransaction(budgetId, amount, reason){
    const result = (await supabase.from(TABLE).insert({budgetId ,amount, reason}).select().single());

    
    return result
}