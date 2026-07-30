import { createBudget, getBudgets, getByFilter } from '../DAL/budgetAlocationRepo.js'
import { getAllTransactions } from '../DAL/spendTransactionRepo.js'

export async function addBudget(budget) {
    const { unit, benefitType, month } = budget
    const unitBudgets = await getByFilter("unit", unit)
    const monthBudget = await getByFilter("month", month)
    const benefitTypeBudget = await getByFilter("benefitType", benefitType)
    console.log(benefitType);

    if (unitBudgets.data.length > 0 && monthBudget.data.length > 0 && benefitTypeBudget.data.length > 0) {
        const error = new Error("budget already exists")
        error.statusCode = 409
        throw error
    }
    return await createBudget(budget)
}



export async function reduce(transaction) {
    const transactionId = transaction.id
    console.log(transactionId);

    const allTransactions = await getAllTransactions(transactionId)
    console.log(allTransactions);

    const spentAmount = allTransactions.reduce((sum, t) => {
        sum + t.amount
    }, 0)
    // const allocatedAmount = budget.allocatedAmount

    // const remainingAmount = allocatedAmount - spentAmount
    return spentAmount
}

export async function showBudgets(unit, month, benefitType) {
    let result
    if (unit) result = await getByFilter("unit", unit);
    if (month) result = await getByFilter("month", month);
    if (benefitType) result = getByFilter("benefitType", benefitType)
    else result = await getBudgets()
    const totalTransaction = result.data

    for (const t of totalTransaction) {
        const allTransactions = await getAllTransactions(t.id)
        const spentAmount = allTransactions.data.reduce((sum, t) => {
            sum + t.amount
        }, 0)
    }



    const budget = {
        ...result.data,
        
    }
    return budget
}




