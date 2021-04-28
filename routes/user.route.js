import express from 'express'
import { login, create } from '../controllers/users.controller.js'

let userRoute = express.Router()

userRoute.post("/", create)

userRoute.post("/login", login)

userRoute.get('/', async (req, res) => {
    const token = req.body.token
    const user = jwt.verify(token, process.env.secret_key)
    console.log(user)
})

export default userRoute