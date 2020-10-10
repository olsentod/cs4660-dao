const VendorDAO = require('./sqlite3/vendorDAO1Sqlite');
const CustomerDAO = require('./sqlite3/customerDAO1Sqlite');
const ContractorDAO = require('./sqlite3/contractorDAO1Sqlite');
const ManagerDAO = require('./sqlite3/managerDAO1Sqlite');
const EmployeeDAO = require('./sqlite3/employeeDAO1Sqlite');
const ExecutiveDAO = require('./sqlite3/executiveDAO1Sqlite');
const sqlite3 = require('sqlite3').verbose();
const {employees, managers, executives, vendors, customers, contractors} = require('./arrays')

const db = new sqlite3.Database('./sqlite3/db/orm1', (err) => {
    if (err) {
        console.error(err.message);
    }
})

for(let executive of executives) {
    ExecutiveDAO.create(db, executive)
}
for(let manager of managers) {
    ManagerDAO.create(db, manager)
}

for(let employee of employees) {
    EmployeeDAO.create(db, employee)
}

for(let vendor of vendors) {
    VendorDAO.create(db, vendor)
}

for(let customer of customers) {
    CustomerDAO.create(db, customer)
}

for(let contractor of contractors) {
    ContractorDAO.create(db, contractor)
} 