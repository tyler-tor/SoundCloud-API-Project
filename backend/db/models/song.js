'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Song.belongsTo(
        models.Album, {
          foreignKey: 'albumId'
        }
      ),
      Song.belongsTo(
        models.User, {
          foreignKey: 'userId',

        }
      ),
      Song.belongsToMany(
        models.Playlist, {
          through: models.PlaylistSong,
          onDelete: 'cascade'
        }
      ),
      Song.hasMany(
        models.Comment, {
          foreignKey: 'songId'
        }
      )
    }
  }
  Song.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    previewImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Song',
    scopes: {
      noPlaylistSong: {
        attributes: {
          exclude: ['PlaylistSong']
        }
      }
    }
  });
  return Song;
};
