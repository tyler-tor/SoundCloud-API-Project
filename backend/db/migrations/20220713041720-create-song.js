'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(30),
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      previewImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      albumId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Albums',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Songs');
  }
};
