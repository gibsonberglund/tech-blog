const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    // Manually define the primary key
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    user_name: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: true,
    created_at: "created_date",
    updated_at: "updated_at",
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: 'posts'
  }
);

module.exports = Post;