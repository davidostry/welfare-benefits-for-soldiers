import { createBudget, getBudgets, getByFilter } from '../DAL/budgetAlocationRepo.js'

export async function addBudget(budget){

    return await createBudget(budget)
}

export async function showBudgets(unit, month, benefitType){
    if (unit) return await getByFilter("unit", unit);
    if (month) return await getByFilter("month", month);
    if (benefitType) return getByFilter("benefitType", benefitType)
    return await getBudgets()
}

