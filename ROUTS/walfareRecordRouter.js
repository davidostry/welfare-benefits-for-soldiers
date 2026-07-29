import express from 'express'
import { createRecord, getRecord } from '../CTRLS/walfareRecordCtrl.js'

const router = express.Router();

router.post("/:soldierId/benefits", createRecord);

router.get("/:soldierId/benefits", getRecord);

export default router;