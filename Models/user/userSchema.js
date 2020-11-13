const mongoose = require("mongoose");
const schemaType = require("../../Types/index");

const userSchema = new mongoose.Schema({
    firstName: {
        type: schemaType.TypeString,
        required: "FirstName is Required",
    },
    lastName: {
        type: schemaType.TypeString,
        required: "lastName is Required"
    },
    mobileNumber: {
        type: schemaType.TypeNumber,
        required: "mobileNumber is Required"
    },
    email: {
        type: schemaType.TypeString,
        unique: true,
        required: 'Email address is required',
    },
    password: {
        type: schemaType.TypeString,
        required: "password is Required"
    },

}, { timestamps: true })

module.exports = userSchema