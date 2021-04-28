import express from 'express'
import mongoose from 'mongoose'
import auth from './middleware/auth.js'


import cors from 'cors'
import 'dotenv/config.js'

// import issueRoute from './routes/issueRoute.js'
import customerRoute from './routes/customerRoute.js'
import userRoute from './routes/user.route.js'
import itemRoute from './routes/item.route.js'
import patientRoute from './routes/patient.route.js'
import authenticationRoute from './routes/authentication.route.js'

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

app.use('/customer', auth, customerRoute)
app.use('/user', auth, userRoute)
app.use('/item', auth, itemRoute)
app.use('/patient', auth, patientRoute)
app.use('/login', authenticationRoute)



app.listen(port, console.log("express started running"))
