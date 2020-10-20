const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class Manager extends Sequelize.Model { }

Manager.init({
},
    { sequelize, modelName: 'managers' },
);

module.exports = Manager;