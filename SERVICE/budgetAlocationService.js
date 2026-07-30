import { createBudget, getBudgets, getByFilter } from '../DAL/budgetAlocationRepo.js'

export async function addBudget(budget) {
    const { unit, benefitType, month } = budget
    const unitBudgets = await getByFilter("unit", unit)
    const monthBudget = await getByFilter("month", month)
    const benefitTypeBudget = await getByFilter("benefitType", benefitType)
    console.log( benefitType);
    
    if (unitBudgets.data.length > 0 && monthBudget.data.length > 0 && benefitTypeBudget.data.length > 0) {
        const error = new Error("budget already exists")
        error.statusCode = 409
        throw error
    }
    return await createBudget(budget)
}

export async function showBudgets(unit, month, benefitType) {
    if (unit) return await getByFilter("unit", unit);
    if (month) return await getByFilter("month", month);
    if (benefitType) return getByFilter("benefitType", benefitType)
    return await getBudgets()
}

