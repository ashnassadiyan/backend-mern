import express from 'express'
import customer from '../models/Customers.js'

let customerRoute = express.Router()

//customer
customerRoute.post('/', (req, res) => {
    const dbCustomer = req.body
    customer.create(dbCustomer, (err, data) => {
        err ? res.status(500).send(err) : res.status(201).send('success')
    })
})
customerRoute.get('/', (req, res) => {
    customer.find((err, data) => {
        err ? res.status(500).send(err) : res.status(201).send(data)
    })
})

export default customerRoute

