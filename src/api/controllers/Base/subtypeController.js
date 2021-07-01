const { updateTransaction } = require('../Core/transactionController');
module.exports = {
  getAllSubtype: (models) => (req, res, next) => {
    models.subtipo_transaccion
      .findAll({
        where: { anulado: 0, id_tipo_transaccion: req.params.id_tipo },
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
          message: 'Error interno, no se han podido obtener los productos',
        });
      });
  },
  createASubtype: (models) => async (req, res, next) => {
    const { id_tipo_transaccion, nombre_subtipo } = req.body;

    let transaction;

    try {
      transaction = await sequelize.transaction();

      models.subtipo_transaccion
        .create(
          {
            id_tipo_transaccion,
            nombre_subtipo,
          },
          { transaction }
        )
        .then(async (result) => {
          await transaction.commit();
          res.status(200).send(result.dataValues);
        });
    } catch (error) {
      if (error) await transaction.rollback();
      res.status(500).send('Error');
    }
  },

  updateSubtype: (models, sequelize) => async (req, res, next) => {
    const { id_tipo_transaccion, nombre_subtipo } = req.body;

    updateTransaction(
      req,
      res,
      next,
      {
        id_tipo_transaccion,
        nombre_subtipo,
      },
      sequelize,
      models,
      'subtipo_transaccion'
    );
  },
};
