const bcrypt = require('bcryptjs')
const { updateSpecificData } = require('../../../Helpers')

// NOTE: Flow is not confirmed may we need some changes in future.

const updatePassword = (req, res) => {
    const { new_password, user_id } = req.body;
    let newPasswordHash = bcrypt.hashSync(new_password, bcrypt.genSaltSync(10))
    let searchQuery = { "_id": user_id }
    let updateQuery = { "password": newPasswordHash }
    try {
        await updateSpecificData('user', searchQuery, updateQuery)
        return res.status(200).send({ status: 200, success: 'Password successfully Updated.' })
    } catch (e) {
        res.status(200).send({ status: 200, message: e.message })
    }

}

module.exports = updatePassword