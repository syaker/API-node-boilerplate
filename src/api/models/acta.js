const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acta', {
    id_acta: {
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
    id_usuario_meucci: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_usuario_externo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario_externo',
        key: 'id_usuario_externo'
      }
    },
    acta: {
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
    tableName: 'acta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_acta",
        unique: true,
        fields: [
          { name: "id_acta" },
        ]
      },
    ]
  });
};
