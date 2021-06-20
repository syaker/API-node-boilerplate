module.exports = {
  getAllRentals: (models) => (req, res, next) => {
    models.transaccion
      .findAll({
        where: { anulado: 0 },
        limit: req.query.limit,
        order: req.query.order,
        attributes: { exclude: ['anulado']},
      })
      .then((data) => {
        if (!data) return next(404);
        res.status(200).json(data.dataValues);
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json({
          message: 'Error interno, no se han podido obtener las transaccion de alquiler',
        });
      });
  },

  getAnRental: (models) => (req, res, next) => {
      
  },

  createRental: (models) => (req, res, next) => {},

  updateRental: (models) => (req, res, next) => {},

  deleteRental: (models) => (req, res, next) => {},
};
