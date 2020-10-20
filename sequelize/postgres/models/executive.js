const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class Executive extends Sequelize.Model { }

Executive.init({
    bonus: {
        type: DataTypes.INTEGER,
    }
},
    { sequelize, modelName: 'executives' },
);

module.exports = Executive;