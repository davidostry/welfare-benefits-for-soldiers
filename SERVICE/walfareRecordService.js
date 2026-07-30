import { createRecord, getRecordBySoldierId, updateRecord } from '../DAL/walfareRecordRepo.js'

export async function addRecord(soldierId, record) {
    const soldier = await getRecordBySoldierId(soldierId)
    if (soldier) {
        const error = new Error("record is already exists");
        error.statusCode = 209
        throw error
    }
    const { unit, benefitTAype, startDate, decisionReason, budgetApprove, details } = record
    const newRecord = {
        soldierId,
        unit,
        currentBenefitTAype: benefitTAype,
        history: [
            {
                startDate: startDate || new Date,
                endDate: null,
                decisionReason,
                budgetApprove,
                benefitTAype,
                details
            }
        ]
    }

    return await createRecord(newRecord)
}

export async function showRecord(soldierId) {

    return await getRecordBySoldierId(soldierId)
}

export async function editRecord(id, record) {
    return await updateRecord(id, record)
}