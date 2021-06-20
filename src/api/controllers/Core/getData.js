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
          message: 'Error interno, no se han podido obtener las transaccion de compra',
        });
      });
  },
};
