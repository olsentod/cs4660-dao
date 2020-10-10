const {main, employees, managers, executives, vendors, customers, contractors} = require('./main')
main()
module.exports.employees = employees
module.exports.managers = managers
module.exports.executives = executives
module.exports.vendors = vendors
module.exports.customers = customers
module.exports.contractors = contractors