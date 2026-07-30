import { createRecord, getRecordBySoldierId, updateRecord } from '../DAL/walfareRecordRepo.js'

export async function addRecord(soldierId, record) {
    const soldier = await getRecordBySoldierId(soldierId)
    if (soldier) {
        const error = new Error("record is already exists");
        error.statusCode = 209
        throw error
    }
    const { unit, benefitType, startDate, decisionReason, budgetApprove, details } = record
    const newRecord = {
        soldierId,
        unit,
        currentBenefitType: benefitType,
        history: [
            {
                startDate: startDate || new Date,
                endDate: null,
                decisionReason,
                budgetApprove,
                benefitType,
                details
            }
        ]
    }


    return await createRecord(newRecord)
}

export async function showRecord(soldierId) {

    return await getRecordBySoldierId(soldierId)
}

export async function editRecord(soldierId, update) {
    const soldier = await getRecordBySoldierId(soldierId)
    if (!soldier) {
        const error = new Error("soldier not found")
        error.statusCode = 404
        throw error
    }
    const { benefitType, details, decisionReason, budgetApprove, decisionDate } = update
    console.log(decisionDate);

    soldier.history.endDate = decisionDate
    soldier.currentBenefitType = benefitType

    const newBenefit = {
        startDate: decisionDate,
        endDate: null,
        decisionReason,
        details,
        benefitType,
        budgetApprove

    }

    soldier.history.push(newBenefit)


    return await updateRecord(soldierId, update)
}