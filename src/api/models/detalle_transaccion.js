const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalle_transaccion', {
    id_detalle_transaccion: {
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
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producto',
        key: 'id_producto'
      }
    },
    id_usuario_meuci: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_usuario_externo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario_externo',
        key: 'id_usuario_externo'
      }
    },
    direccion_destino: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    distrito_destino: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    referencia_destino: {
      type: DataTypes.CHAR(90),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.SMALLINT,
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
    tableName: 'detalle_transaccion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_detalle_transaccion",
        unique: true,
        fields: [
          { name: "id_detalle_transaccion" },
        ]
      },
    ]
  });
};
