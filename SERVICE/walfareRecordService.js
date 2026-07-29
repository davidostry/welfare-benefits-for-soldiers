import { createRecord, getRecordById } from '../DAL/walfareRecordRepo.js'

export async function addRecord(record) {
    
    return await createRecord(record)
}

export async function showRecord(id){

    return await getRecordById(id)
}