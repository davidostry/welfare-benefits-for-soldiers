import { addRecord, showRecord } from '../SERVICE/walfareRecordService.js'

export async function createRecord(req, res, next) {
    try {
        const record = req.body
        const result = await addRecord(record)
        if (!result) return res.status(409).json({ message: "record is alredy exists" })
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