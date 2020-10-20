const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class Nonemployee extends Sequelize.Model { }

Nonemployee.init({
    company: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING
    }
},
    { sequelize, modelName: 'nonemployees' },
);

module.exports = Nonemployee;