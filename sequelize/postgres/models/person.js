const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class Person extends Sequelize.Model { }

Person.init({
    first: {
        type: DataTypes.STRING,
    },
    middle: {
        type: DataTypes.STRING
    },
    last: {
        type: DataTypes.STRING
    },
    dob: {
        type: DataTypes.DATE
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    street: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    zip: {
        type: DataTypes.STRING
    }
},
    { sequelize, modelName: 'persons' },
);

module.exports = Person;