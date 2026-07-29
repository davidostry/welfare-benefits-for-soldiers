import {supabase} from '../DB/budgetAlocationDB.js'

const TABLE = "transactions"

export async function getAllTransactions(id){
    
    const result = await supabase.from(TABLE).select().eq("budgetId", id)
    return result
}
