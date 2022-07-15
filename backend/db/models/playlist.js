'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Playlist.belongsToMany(
        models.Song, {
          through: PlaylistSong,
          onDelete: 'cascade'
        }
      ),
      Playlist.belongsTo(
        models.User, {
          foreignKey: 'userId',
          key: 'id'
        }
      )
    }
  }
  Playlist.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    previewImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};
