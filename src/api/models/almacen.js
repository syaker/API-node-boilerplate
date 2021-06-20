const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('almacen', {
    id_almacen: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_sede: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sede',
        key: 'id_sede'
      }
    },
    nombre_almacen: {
      type: DataTypes.INTEGER,
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
    tableName: 'almacen',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_almacen",
        unique: true,
        fields: [
          { name: "id_almacen" },
        ]
      },
    ]
  });
};
