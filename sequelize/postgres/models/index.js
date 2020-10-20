const Person = require('./person');
const Employee = require('./employee');
const Manager = require('./manager');
const Executive = require('./executive');
const Nonemployee = require('./nonemployee');

Nonemployee.belongsTo(Person);

Employee.belongsTo(Person);

Manager.belongsTo(Employee);

Executive.belongsTo(Manager);



module.exports = { Person, Employee, Manager, Executive, Nonemployee };