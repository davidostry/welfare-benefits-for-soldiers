import db from '../DB/walfareRecordDB.js'

const collection = db.collection("walfer");

export async function createRecord(record){
    const result = await collection.insertOne(record)
    return result
}