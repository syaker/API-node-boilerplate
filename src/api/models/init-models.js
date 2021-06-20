var DataTypes = require("sequelize").DataTypes;
var _acta = require("./acta");
var _almacen = require("./almacen");
var _convenio = require("./convenio");
var _detalle_transaccion = require("./detalle_transaccion");
var _estado = require("./estado");
var _factura = require("./factura");
var _guia_remision = require("./guia_remision");
var _numero_serie = require("./numero_serie");
var _producto = require("./producto");
var _proveedor = require("./proveedor");
var _sede = require("./sede");
var _subtipo_transaccion = require("./subtipo_transaccion");
var _tipo_transaccion = require("./tipo_transaccion");
var _transaccion = require("./transaccion");
var _uVi_Maestro = require("./uVi_Maestro");
var _user = require("./user");
var _usuario_externo = require("./usuario_externo");

function initModels(sequelize) {
  var acta = _acta(sequelize, DataTypes);
  var almacen = _almacen(sequelize, DataTypes);
  var convenio = _convenio(sequelize, DataTypes);
  var detalle_transaccion = _detalle_transaccion(sequelize, DataTypes);
  var estado = _estado(sequelize, DataTypes);
  var factura = _factura(sequelize, DataTypes);
  var guia_remision = _guia_remision(sequelize, DataTypes);
  var numero_serie = _numero_serie(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);
  var proveedor = _proveedor(sequelize, DataTypes);
  var sede = _sede(sequelize, DataTypes);
  var subtipo_transaccion = _subtipo_transaccion(sequelize, DataTypes);
  var tipo_transaccion = _tipo_transaccion(sequelize, DataTypes);
  var transaccion = _transaccion(sequelize, DataTypes);
  var uVi_Maestro = _uVi_Maestro(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var usuario_externo = _usuario_externo(sequelize, DataTypes);

  numero_serie.belongsTo(detalle_transaccion, { as: "detalle_transaccion", foreignKey: "id_detalle_transaccion"});
  detalle_transaccion.hasMany(numero_serie, { as: "numero_serie", foreignKey: "id_detalle_transaccion"});
  transaccion.belongsTo(estado, { as: "estado", foreignKey: "id_estado"});
  estado.hasMany(transaccion, { as: "transaccion", foreignKey: "id_estado"});
  detalle_transaccion.belongsTo(producto, { as: "producto", foreignKey: "id_producto"});
  producto.hasMany(detalle_transaccion, { as: "detalle_transaccion", foreignKey: "id_producto"});
  numero_serie.belongsTo(producto, { as: "producto", foreignKey: "id_producto"});
  producto.hasMany(numero_serie, { as: "numero_serie", foreignKey: "id_producto"});
  transaccion.belongsTo(proveedor, { as: "proveedor", foreignKey: "id_proveedor"});
  proveedor.hasMany(transaccion, { as: "transaccion", foreignKey: "id_proveedor"});
  almacen.belongsTo(sede, { as: "sede", foreignKey: "id_sede"});
  sede.hasMany(almacen, { as: "almacen", foreignKey: "id_sede"});
  transaccion.belongsTo(sede, { as: "sede", foreignKey: "id_sede"});
  sede.hasMany(transaccion, { as: "transaccion", foreignKey: "id_sede"});
  transaccion.belongsTo(subtipo_transaccion, { as: "subtipo_transaccion", foreignKey: "id_subtipo_transaccion"});
  subtipo_transaccion.hasMany(transaccion, { as: "transaccion", foreignKey: "id_subtipo_transaccion"});
  subtipo_transaccion.belongsTo(tipo_transaccion, { as: "tipo_transaccion", foreignKey: "id_tipo_transaccion"});
  tipo_transaccion.hasMany(subtipo_transaccion, { as: "subtipo_transaccion", foreignKey: "id_tipo_transaccion"});
  transaccion.belongsTo(tipo_transaccion, { as: "tipo_transaccion", foreignKey: "id_tipo_transaccion"});
  tipo_transaccion.hasMany(transaccion, { as: "transaccion", foreignKey: "id_tipo_transaccion"});
  acta.belongsTo(transaccion, { as: "transaccion", foreignKey: "id_transaccion"});
  transaccion.hasMany(acta, { as: "acta", foreignKey: "id_transaccion"});
  convenio.belongsTo(transaccion, { as: "transaccion", foreignKey: "id_transaccion"});
  transaccion.hasMany(convenio, { as: "convenio", foreignKey: "id_transaccion"});
  detalle_transaccion.belongsTo(transaccion, { as: "transaccion", foreignKey: "id_transaccion"});
  transaccion.hasMany(detalle_transaccion, { as: "detalle_transaccion", foreignKey: "id_transaccion"});
  factura.belongsTo(transaccion, { as: "transaccion", foreignKey: "id_transaccion"});
  transaccion.hasMany(factura, { as: "factura", foreignKey: "id_transaccion"});
  guia_remision.belongsTo(transaccion, { as: "transaccion", foreignKey: "id_transaccion"});
  transaccion.hasMany(guia_remision, { as: "guia_remision", foreignKey: "id_transaccion"});
  acta.belongsTo(usuario_externo, { as: "usuario_externo", foreignKey: "id_usuario_externo"});
  usuario_externo.hasMany(acta, { as: "acta", foreignKey: "id_usuario_externo"});
  convenio.belongsTo(usuario_externo, { as: "usuario_externo", foreignKey: "id_usuario_externo"});
  usuario_externo.hasMany(convenio, { as: "convenio", foreignKey: "id_usuario_externo"});
  detalle_transaccion.belongsTo(usuario_externo, { as: "usuario_externo", foreignKey: "id_usuario_externo"});
  usuario_externo.hasMany(detalle_transaccion, { as: "detalle_transaccion", foreignKey: "id_usuario_externo"});
  guia_remision.belongsTo(usuario_externo, { as: "usuario_externo", foreignKey: "id_usuario_externo"});
  usuario_externo.hasMany(guia_remision, { as: "guia_remision", foreignKey: "id_usuario_externo"});

  return {
    acta,
    almacen,
    convenio,
    detalle_transaccion,
    estado,
    factura,
    guia_remision,
    numero_serie,
    producto,
    proveedor,
    sede,
    subtipo_transaccion,
    tipo_transaccion,
    transaccion,
    uVi_Maestro,
    user,
    usuario_externo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
