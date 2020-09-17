const Employee = require('./Employee');

class Manager extends Employee {
    constructor (id, first, middle, last, dob, phone, email, street, city, state, zip, companyId, department, title, salary, directReports, managerId) {
        super(id, first, middle, last, dob, phone, email, street, city, state, zip, companyId, department, title, salary, managerId);
        this.directReports = directReports;
    }
}

module.exports = Manager