import {supabase} from '../DB/budgetAlocationDB.js'

export async function createBudget(budget){
    const result = supabase.from("budget").insert(budget).select().single()
    return result
}



