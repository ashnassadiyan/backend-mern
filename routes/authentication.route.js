import express from 'express'
import login from '../controllers/authentication.controller.js'

const authenticationRoute = express.Router()
authenticationRoute.post('/', login)

export default authenticationRoute