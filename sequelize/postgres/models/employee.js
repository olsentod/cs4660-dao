const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class Employee extends Sequelize.Model { }

Employee.init({
    companyId: {
        type: DataTypes.STRING,
    },
    department: {
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.INTEGER
    }
},
    { sequelize, modelName: 'employees' },
);

module.exports = Employee;