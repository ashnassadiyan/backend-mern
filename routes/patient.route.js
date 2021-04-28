import express from 'express'
import { create, update, dele, index, get } from '../controllers/patients.controller.js'

let patientRoute = express.Router()


patientRoute.post("/", create)
patientRoute.put("/", update)
patientRoute.delete("/", dele)
patientRoute.get("/", index)
patientRoute.get("/:id", get)

export default patientRoute