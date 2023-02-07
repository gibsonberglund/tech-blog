const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    // Manually define the primary key
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;