const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guia_remision', {
    id_guia_remision: {
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
    guia: {
      type: DataTypes.CHAR(100),
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
    tableName: 'guia_remision',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_guia_remision",
        unique: true,
        fields: [
          { name: "id_guia_remision" },
        ]
      },
    ]
  });
};
