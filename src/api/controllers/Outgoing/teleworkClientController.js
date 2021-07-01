module.exports = {
  createTeleworkClient: (models, sequelize) => (req, res, next) => {
    const {
      id_sede,
      id_tipo_transaccion,
      id_subtipo_transaccion,
      id_conductor,
      direccion_destino,
      distrito_destino,
      referencia_destino,
      direccion_origen,
      distrito_origen,
      referencia_origen,
      productos,
      guia,
      acta,
    } = req.body;
  },
};
