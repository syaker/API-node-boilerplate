module.exports = {
  getAll: (models, table) => (req, res, next) => {
    models[table]
      .findAll({
        where: { anulado: 0 },
        limit: req.query.limit,
        order: req.query.order,
        attributes: { exclude: ['anulado'] },
      })
      .then((data) => {
        if (!data) return next(404);
        res.status(200).json(data);
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json({
          message: 'Error interno, no se han podido obtener las transacciones',
        });
      });
  },

  getStock: (models) => (req, res, next) => {
    models.detalle_transaccion
      .findAll({
        include: [
          {
            model: models.transaccion,
            as: 'transaccion',
            include: [
              {
                model: models.tipo_transaccion,
                where: { modo_transaccion: req.params.modo },
                as: 'tipo_transaccion',
              },
            ],
          },
        ],
        where: {},
      })
      .then((data) => {
        if (!data) return next(404);
        res.status(200).json(data);
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json({
          message: 'Error interno, no se han podido obtener las transaccion de compra',
        });
      });
  },

  getRelatedProducts() {

  },
};
