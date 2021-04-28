import users from '../models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'


const create = async (req, res) => {
    const { email, password: plainTextPassword, name } = req.body
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
const login = async (req, res) => {

    const { email, password } = req.body.data
    const user = await users.findOne({ email }).lean()

    if (user) {
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
                id: user._id,
                email: user.email,
                password: user.password
            }, process.env.secret_key)
            return res.json({ status: "user found", token: token })
        } else {
            return res.status(500).send('not found')
        }
    } else {
        return res.status(500).send('not found')
    }

}

export { create, index, dele, login }