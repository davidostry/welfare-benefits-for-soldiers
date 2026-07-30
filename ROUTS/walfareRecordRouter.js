import express from 'express'
import { createRecord, getRecord, updateRecord } from '../CTRLS/walfareRecordCtrl.js'
import {validateBody} from '../MIDDLEWARE/validations.js'

const router = express.Router();

router.post("/:soldierId/benefits", validateBody, createRecord);

router.get("/:soldierId/benefits", getRecord);

router.patch("/:soldierId/benefits", updateRecord)

export default router;