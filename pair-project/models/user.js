'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.ToDo,{
        through: models.TodoUser
      })
    }
  };
  User.init({
    fullName:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          type: true,
          msg: 'Full Name Missing'
        }
      }
    }, 
    role: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          type: true,
          msg: 'Role Missing'
        }
      }
    },
    username: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          type: true,
          msg: 'Username Missing'
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          type: true,
          msg: 'Password Missing'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};