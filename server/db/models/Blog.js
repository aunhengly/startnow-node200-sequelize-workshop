'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    authorId    : DataTypes.INTEGER,
    title       : DataTypes.STRING, //{ Type: sequelize.STRING, allowNull: false },
    article     : DataTypes.TEXT, //{ Type: sequelize.TEXT, allowNull: false},
    featured    : DataTypes.BOOLEAN, //{ Types: sequelize.BOOLEAN, allowNull: false},
    published   : DataTypes.DATE,//{ Type: sequelize.DATE, allowNull: false}
  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
    models.Blog.belongsTo( models.Author, {foreignKey: 'authorId'})
  };
  return Blog;
};
