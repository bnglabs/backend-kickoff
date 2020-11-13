const express = require('express');
const bcrypt = require("bcryptjs");
const Config = require("../../../Config");
const jwt = require("jsonwebtoken");
const { findByKey } = require('../../../Helpers')


const login = async(req, res) => {
    const { email, password } = req.body

    try {
        let user = await findByKey('user', "email", email)
        if (user) {
            const passwordIsValid = bcrypt.compareSync(password, user.password);
            if (!passwordIsValid) {
                return res.status(404).send({ status: 400, message: "Invalid Email or Password!" });
            }
            user.password = undefined;
            var token = jwt.sign({ id: user._id }, Config.secret);
            res.status(200).send({ status: 200, user: response[0], token })
        } else {
            return res.status(404).send({ status: 404, message: "user does not exist!" });
        }
    } catch (e) {
        res.status(400).send({ status: 400, message: e })

    }
}

module.exports = login