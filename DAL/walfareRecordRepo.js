import db from '../DB/walfareRecordDB.js'
import {ObjectId} from 'mongodb'

const collection = db.collection("walfer");

export async function createRecord(newRecord){
    const insertad = await collection.insertOne(newRecord)

    const id = insertad.insertedId
    
    const result = await collection.findOne({_id: new ObjectId(id)})

    return result
}

export async function getRecordBySoldierId(soldierId){
    
    const result = await collection.findOne({soldierId: soldierId});

    return result;
}


export async function updateRecord(soldierId, update){
    const result = await collection.findOneAndUpdate({soldierId: soldierId}, {$set:update}, {returnDocument: 'after'});
    return result
}