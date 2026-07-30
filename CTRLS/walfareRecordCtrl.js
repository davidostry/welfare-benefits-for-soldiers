import { addRecord, showRecord, editRecord } from '../SERVICE/walfareRecordService.js'

export async function createRecord(req, res, next) {
    try {
        const { soldierId } = req.params
        const { unit, benefitType, details, decisionReason, budgetApprove, startDate } = req.body
        const record = { unit, benefitType, details, decisionReason, budgetApprove, startDate }
        const result = await addRecord(soldierId, record)
        return res.status(201).json({ data: result })
    } catch (e) {
        next(e)
    }
}

export async function getRecord(req, res, next) {

    try {
        const { soldierId } = req.params
        const result = await showRecord(soldierId);
        if (!result) return res.status(404).json({ message: "record not found" });
        return res.json({ data: result })
    } catch (e) {
        next(e)
    }
}

export async function updateRecord(req, res, next) {
    try {
        const { soldierId } = req.params
        const update = req.body
        const result = await editRecord(soldierId, update)
        if (!result) return res.status(400).json({ message: "failed to update" });
        return res.json({ data: result })
    } catch (e) {
        next(e)
    }
}