const promises = {
  getAllTransactions: (models, req) =>
    models.transaccion.findAll({
      where: { anulado: 0 },
      limit: req.query.limit,
      order: req.query.order,
      include: [
        { model: models.proveedor, as: 'proveedor' },
        { model: models.tipo_transaccion, as: 'tipo_transaccion' },
        { model: models.subtipo_transaccion, as: 'subtipo_transaccion' },
        { model: models.estado, as: 'estado' },
        { model: models.sede, as: 'sede' },
      ],
      attributes: { exclude: ['anulado'] },
    }),
};

module.exports.promises = promises;
