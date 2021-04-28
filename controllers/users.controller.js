import users from '../models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'


const create = async (req, res) => {

    const { email, password: plainTextPassword, name } = req.body.data
    const password = await bcrypt.hash(plainTextPassword, 10)

    try {
        const response = await users.create({
            name,
            password,
            email
        })
        return res.status(201).send("success")
    } catch (err) {
        return res.status(500).send(err)
    }

}
const index = async () => {

}
const dele = async () => {

}


export { create, index, dele }