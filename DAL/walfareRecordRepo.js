import db from '../DB/walfareRecordDB.js'
import {ObjectId} from 'mongodb'

const collection = db.collection("walfer");

export async function createRecord(record){
    const insertad = await collection.insertOne(record)
    console.log(insertad);
    const id = insertad.insertadId
    
    
    const result = await collection.findOne({_id: new ObjectId(id)})

    return insertad
}