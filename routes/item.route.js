import express from 'express'
import { create, index, get, update } from '../controllers/items.controller.js'

let itemRoute = express.Router()

itemRoute.post("/", create)
itemRoute.get('/', index)
itemRoute.get('/:id', get)
itemRoute.put("/:id", update)
itemRoute.delete("/:id", update)


export default itemRoute