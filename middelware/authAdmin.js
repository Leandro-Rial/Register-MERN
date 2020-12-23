const Users = require('../models/userModels');

const authAdmin = async (req, res, next) => {
    try {
        
        // Get user information by id
        const user = await Users.findOne({
            _id: req.user.id
        })
        if(user.role === 0)
            return res.status(400).json({ msg: 'Admin resouces access denied' })

        next()

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = authAdmin