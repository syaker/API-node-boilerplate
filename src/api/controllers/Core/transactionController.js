module.exports = {
  // tipo_transaccion
  // 1 - compra
  // 2 - alquiler
  // 3 - devolucion
  // 4 - plataforma
  // 5 - teletrabajo

  getAllTransactions: (models) => (req, res, next) => {
    models.transaccion
      .findAll({
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

  getAnTransaction: (models) => (req, res, next) => {
    models.transaccion
      .findOne({
        where: { anulado: 0, id_transaccion: req.params.id_transaccion },
        attributes: { exclude: ['anulado'] },
      })
      .then((data) => {
        if (!data) return next(404);
        res.status(200).json(data.dataValues);
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json({
          message: 'Error interno, no se han podido obtener las transaccion',
        });
      });
  },

  createTransaction: (models) => (req, res, next) => {},

  updateTransaction: async (req, res, next, obj, sequelize, models, table) => {
    const { id_transaccion } = req.params;

    let transaction;

    try {
      transaction = await sequelize.transaction();

      models[table]
        .update(obj, {
          where: { id_transaccion },
          returning: true,
          transaction,
        })
        .then(async (data) => {
          await transaction.commit();
          res.status(200).send(data[1][0]);
        });
    } catch (error) {
      console.log(error);
      if (error) await transaction.rollback();
      return next(500);
    }
  },

  deleteTransaction: (models) => async (req, res, next, sequelize) => {
    const { id_transaccion } = req.params;
    let transaction;
    try {
      transaction = await sequelize.transaction();
      models.transaccion
        .update(
          {
            anulado: 1,
          },
          {
            where: { id_transaccion },
            returning: true,
          }
        )
        .then((data) => {
          res.status(200).send(data[1]);
        })
        .catch((err) => {});
    } catch (error) {
      console.log(error);
      if (error) await transaction.rollback();
      res.status(500).send('Error');
    }
  },
};
