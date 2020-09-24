'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ToDo.belongsToMany(models.User, {
        through: models.TodoUser
      })
    }
  };
  ToDo.init({
    task: DataTypes.STRING,
    deadline: DataTypes.DATE,
    isCompleted: DataTypes.BOOLEAN,
    completedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ToDo',
  });
  return ToDo;
};