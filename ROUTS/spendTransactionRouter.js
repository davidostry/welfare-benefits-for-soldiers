import express from 'express'
import { getAllTransactions, createTransaction } from '../CTRLS/spendTransactionCtrl.js'

const router = express.Router()

router.get("/:id/transactions", getAllTransactions)

router.post("/:id/spend", createTransaction)

export default router