import express from 'express'
import mongoose from 'mongoose'


import cors from 'cors'
import 'dotenv/config.js'

// import issueRoute from './routes/issueRoute.js'
import customerRoute from './routes/customerRoute.js'
import userRoute from './routes/user.route.js'
import itemRoute from './routes/item.route.js'
import patientRoute from './routes/patient.route.js'

//app config
const app = express()
const port = process.env.PORT || 8001
const connection_url = process.env.db_Connection

//middleware
app.use(express.json())
app.use(cors())


//db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//api endpoint

// app.use('/issue', issueRoute)
app.use('/customer', customerRoute)
app.use('/user', userRoute)
app.use('/item', itemRoute)
app.use('/patient', patientRoute)



app.listen(port, console.log("express started running"))
