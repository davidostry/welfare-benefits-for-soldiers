import { addRecord } from '../SERVICE/walfareRecordService.js'

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