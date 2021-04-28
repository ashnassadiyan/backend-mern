
import users from '../models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'


const auth = async (req, res, next) => {

    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = await jwt.verify(token, process.env.secret_key)
        const user = await users.findOne({ _id: decoded.id }).lean()
        if (user) {
            if (await bcrypt.compare(decoded.password, user.password)) {
                next()
            } else {
                return res.status(500).send('you are not authorized')
            }
        }
    } catch (error) {
        return res.status(500).send(error)
    }

}
export default auth