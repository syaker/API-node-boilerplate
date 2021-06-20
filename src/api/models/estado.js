const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estado', {
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_estado: {
      type: DataTypes.STRING(30),
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
    tableName: 'estado',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_estado",
        unique: true,
        fields: [
          { name: "id_estado" },
        ]
      },
    ]
  });
};
