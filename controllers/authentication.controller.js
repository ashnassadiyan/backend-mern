import users from '../models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const login = async (req, res) => {
    const { email, password } = req.body
    const user = await users.findOne({ email }).lean()

    if (user) {
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
                id: user._id,
                email: user.email,
                password: password
            }, process.env.secret_key)
            return res.json({ status: "user found", token: token })
        } else {
            return res.status(500).send('not found')
        }
    } else {
        return res.status(500).send('not found')
    }

}

export default login