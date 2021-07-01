const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedor', {
    id_proveedor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    razon_social: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    ruc: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    nombre_contacto: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    telefono_contacto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email_contacto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    observacion: {
      type: DataTypes.STRING(200),
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
    tableName: 'proveedor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_proveedor",
        unique: true,
        fields: [
          { name: "id_proveedor" },
        ]
      },
    ]
  });
};
