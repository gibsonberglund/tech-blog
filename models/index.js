const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'username',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'username'
});

module.exports = { User, Post };
