import db from '../DB/walfareRecordDB.js'
import {ObjectId} from 'mongodb'

const collection = db.collection("walfer");

export async function createRecord(record){
    const insertad = await collection.insertOne(record)

    const id = insertad.insertedId
    
    const result = await collection.findOne({_id: new ObjectId(id)})

    return result
}

export async function getRecordById(id){
    
    const result = await collection.findOne({_id: new ObjectId(id)});

    return result;
}


export async function updateRecord(id, update){
    const result = await collection.findOneAndUpdate({_id: new ObjectId(id)}, {$set:update}, {returnDocument: 'after'});
    return result
}