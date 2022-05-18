require('events').EventEmitter.prototype._maxListeners = 0;
process.setMaxListeners(0);
const User = require("../model/user.model")
const jwt = require("jsonwebtoken")

const newToken = (payload) => {
    return jwt.sign({ payload }, 'lewis')
}

const register = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) return res.status(400).send({ status: "failed", message: "user already existed" })
        user = await User.create(req.body)
        const token = newToken(user)
        return res.status(201).json({ user, token })
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }

}

const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).populate("following").exec()
        if (!user) return res.status(400).send({ status: "failed", message: "Incorrect email or password" })
        const match = await user.checkPassword(req.body.password)
        if (!match) return res.status(400).send({ status: "failed", message: "Incorrect password" })
        const token = newToken(user)

        return res.status(201).json({ user, token })
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
}

module.exports = { register, login }