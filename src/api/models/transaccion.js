const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaccion', {
    id_transaccion: {
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
    id_tipo_transaccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_transaccion',
        key: 'id_tipo_transaccion'
      }
    },
    id_subtipo_transaccion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'subtipo_transaccion',
        key: 'id_subtipo_transaccion'
      }
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'proveedor',
        key: 'id_proveedor'
      }
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estado',
        key: 'id_estado'
      }
    },
    id_conductor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_factura: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    direccion_origen: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    distrito_origen: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    referencia_origen: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    anulado: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'transaccion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_transaction",
        unique: true,
        fields: [
          { name: "id_transaccion" },
        ]
      },
    ]
  });
};
