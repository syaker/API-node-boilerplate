const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('factura', {
    id_factura: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_transaccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transaccion',
        key: 'id_transaccion'
      }
    },
    factura: {
      type: DataTypes.STRING(100),
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
    tableName: 'factura',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_factura",
        unique: true,
        fields: [
          { name: "id_factura" },
        ]
      },
    ]
  });
};
