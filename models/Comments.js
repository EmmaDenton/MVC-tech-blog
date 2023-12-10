const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection');
const User = require('./User');
const Post = require('./Post');

class Comment extends Model {}

Comment.init({
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Comment',
    timestamps: true,
    underscored: true
});

Comment.belongsTo(User); 
Comment.belongsTo(Post);
module.exports = Comment;
