const mongoose = require('mongoose') 
const { Schema } = mongoose

const Employee = new Schema({
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
    companyId: String,
    department: String,
    title: String,
    salary: Number,
    managerId: String
})

module.exports = Employee