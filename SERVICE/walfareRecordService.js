import { createRecord, getRecordById, updateRecord } from '../DAL/walfareRecordRepo.js'

export async function addRecord(id, record) {
    const check = await getRecordById(id)
    if (check) throw new Error("record is already exists");
    
    return await createRecord(record)
}

export async function showRecord(id) {

    return await getRecordById(id)
}

export async function editRecord(id, record){
    return await updateRecord(id, record)
}