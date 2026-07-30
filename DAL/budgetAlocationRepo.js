import { supabase } from '../DB/budgetAlocationDB.js'

const TABLE = "budget"

export async function createBudget(budget) {
    const result = supabase.from(TABLE).insert(budget).select().single()
    return result
}

export async function getBudgets() {
    const result = await supabase.from(TABLE).select()
    return result
}

export async function getByFilter(column, value) {
    console.log(column, value);

    const result = await supabase.from(TABLE).select().eq(column, value)
    return result
}


