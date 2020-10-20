const Person = require('./person');
const Employee = require('./employee');

Person.hasOne(Employee, {
    onUpdate: 'CASCADE'
})

Employee.belongsTo(Person);

module.exports = {Person, Employee};