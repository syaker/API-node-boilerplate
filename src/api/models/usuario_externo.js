const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_externo', {
    id_usuario_externo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    apellido_paterno: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    apellido_materno: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cuenta: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    subarea: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    razon_social: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ceco: {
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
    tableName: 'usuario_externo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_usuario_externo",
        unique: true,
        fields: [
          { name: "id_usuario_externo" },
        ]
      },
    ]
  });
};
