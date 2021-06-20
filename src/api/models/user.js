const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id_user: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    anulado: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    fecharegistro: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_user",
        unique: true,
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
};
