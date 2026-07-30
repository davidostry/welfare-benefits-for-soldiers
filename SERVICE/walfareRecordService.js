import { createRecord, getRecordById, updateRecord } from '../DAL/walfareRecordRepo.js'

export async function addRecord(id, record) {
    // const soldier = await getRecordById(id)
    // if (soldier) {
    //     const error = new Error("record is already exists");
    //     error.status(209)
    //     return error
    // }
    const newRecord = {
        soldierId: id,
        unit: record.unit,
        currentBenefitTAype: record.benefitTAype,
        history: [
            {
                startDate: record.startDate || new Date,
                endDate: null,
                decisionReason: record.decisionReason,
                budgetApprove: record.budgetApprove,
                benefitTAype: record.benefitTAype,
                details: record.details
            }
        ]
    }

    return await createRecord(newRecord)
}

export async function showRecord(id) {

    return await getRecordById(id)
}

export async function editRecord(id, record) {
    return await updateRecord(id, record)
}