const mongoose = require('mongoose') 
const { Schema } = mongoose

const Executive = new Schema({
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
    managerId: String,
    directReports: Array,
    bonus: Number
})

module.exports = Executive