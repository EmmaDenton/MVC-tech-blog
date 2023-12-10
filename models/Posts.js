const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection');
const User = require('./User');

class Post extends Model {}

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Post',
    timestamps: true,
    underscored: true
});

Post.belongsTo(User);
module.exports = Post;
