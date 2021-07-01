const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    id_producto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_producto: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    marca_producto: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    modelo_producto: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    anulado: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    fecharegistro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'producto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_producto",
        unique: true,
        fields: [
          { name: "id_producto" },
        ]
      },
    ]
  });
};
