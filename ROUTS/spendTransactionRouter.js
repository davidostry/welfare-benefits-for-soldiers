import express from 'express'
import { getAllTransactions } from '../CTRLS/spendTransactionCtrl.js'

const router = express.Router()

router.get("/:id/transactions", getAllTransactions)

export default router