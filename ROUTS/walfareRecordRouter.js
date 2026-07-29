import express from 'express'
import { createRecord, getRecord, updateRecord } from '../CTRLS/walfareRecordCtrl.js'

const router = express.Router();

router.post("/:soldierId/benefits", createRecord);

router.get("/:soldierId/benefits", getRecord);

router.patch("/:soldierId/benefits", updateRecord)

export default router;