const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subtipo_transaccion', {
    id_subtipo_transaccion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tipo_transaccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_transaccion',
        key: 'id_tipo_transaccion'
      }
    },
    nombre_subtipo: {
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
    tableName: 'subtipo_transaccion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_subtipo",
        unique: true,
        fields: [
          { name: "id_subtipo_transaccion" },
        ]
      },
    ]
  });
};
