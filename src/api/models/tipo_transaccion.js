const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_transaccion', {
    id_tipo_transaccion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_tipo_transaccion: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    modo_transaccion: {
      type: DataTypes.STRING(20),
      allowNull: true
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
    tableName: 'tipo_transaccion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_tipo_transaccion",
        unique: true,
        fields: [
          { name: "id_tipo_transaccion" },
        ]
      },
    ]
  });
};
