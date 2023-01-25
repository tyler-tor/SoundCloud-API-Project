 'use strict';
const {Model, Validator} = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    toSafeObject() {
      const { id, username, email } = this;
      //context will be the User instance,
      return { id, username, email };
    };

    validatePassword(password){
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    };

    static getCurrentUserById(id){
      return User.scope('currentUser').findByPk(id);
    };

    static async login({ credential, password }) {
      const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential
          }
        }
      });
      if(user && user.validatePassword(password)){
        return await User.scope('currentUser').findByPk(user.id);
      };
    }

    static async signup({ username, email, password, firstName, lastName, profileImageUrl }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        username,
        email,
        hashedPassword,
        firstName,
        lastName,
        previewImage: profileImageUrl
      });
      return await User.scope('currentUser').findByPk(user.id);
    };

    static associate(models) {
      User.hasMany(
        models.Album, {
          foreignKey: 'userId',

        }
      ),
      User.hasMany(
        models.Playlist, {
          foreignKey: 'userId',

        }
      ),
      User.hasMany(
        models.Song, {
          foreignKey: 'userId'
        }
      ),
      User.hasMany(
        models.Comment, {
          foreignKey: 'userId'
        }
      )
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [4,30],
        isNotEmail(val){
          if (Validator.isEmail(val)){
            throw new Error('Cannot be email');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3,256],
        isEmail: true
      }
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60,60]
      }
    },
    previewImage: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword', 'createdAt', 'updatedAt'] }
      },
      loginUser: {
        attributes: {}
      },
      includedArtist: {
        attributes: {
          exclude: ['updatedAt', 'createdAt', 'hashedPassword',
        'email', 'firstName', 'lastName']
        }
      },
      includedInComment: {
        attributes: {
          exclude: ['updatedAt', 'createdAt', 'hashedPassword', 'email', 'firstName', 'lastName']
        }
      }
    }
  });
  return User;
};
