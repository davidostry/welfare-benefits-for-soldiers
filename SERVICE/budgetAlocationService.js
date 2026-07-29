import { createBudget } from '../DAL/budgetAlocationRepo.js'

export async function addBudget(budget){
    return await createBudget(budget)
}