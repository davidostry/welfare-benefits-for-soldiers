import express from 'express'
import dotenv from 'dotenv/config'
import budgetAlocatioRouter from './ROUTS/budgetAlocationRouter.js'
import spendTransactionRouter from './ROUTS/spendTransactionRouter.js'
import walfareRecordRouter from './ROUTS/walfareRecordRouter.js'
import {logger, errorHandeling} from './MIDDLEWARE/basic.js'

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use(logger)

app.use("/soldiers", walfareRecordRouter)

app.use("/budget", budgetAlocatioRouter)

app.use("/budget/", spendTransactionRouter)

app.use(errorHandeling)

app.listen(PORT, (e)=>{
    if (e) return console.log(e);
    console.log(`server is runing on http://localhost:${PORT}`);  
})