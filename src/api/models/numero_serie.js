const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('numero_serie', {
    id_numero_serie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_detalle_transaccion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numero_serie: {
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
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'numero_serie',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_numero_serie",
        unique: true,
        fields: [
          { name: "id_numero_serie" },
        ]
      },
    ]
  });
};
