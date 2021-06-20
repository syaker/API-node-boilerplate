const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uVi_Maestro', {
    meucciid: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nombrecompleto: {
      type: DataTypes.STRING(101),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    razonsocial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cuenta: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subarea: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    servicio: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    cargo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    ausentismo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    idsap: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'uVi_Maestro',
    schema: 'dbo',
    timestamps: false
  });
};
