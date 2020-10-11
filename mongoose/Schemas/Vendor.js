const mongoose = require('mongoose') 
const { Schema } = mongoose

const Vendor = new Schema({
    id: String,
    first: String,
    middle: String,
    last: String,
    dob: String,
    phone: String,
    email: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    company: String,
    type: String
})

module.exports = Vendor