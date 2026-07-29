import { createRecord } from '../DAL/walfareRecordRepo.js'

export async function addRecord(record) {
    
    return await createRecord(record)
}