import express from 'express'
import { createRecord } from '../CTRLS/walfareRecordCtrl.js'

const router = express.Router()

router.post("/", createRecord)

export default router