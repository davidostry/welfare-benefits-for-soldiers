import express from 'express'
import { createBudget } from '../CTRLS/budgetAlocationCtrl.js'

const router = express.Router()

router.post("/", createBudget)

export default router