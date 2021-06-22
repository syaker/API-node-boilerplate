const { Sequelize } = require('sequelize');
const { updateTransaction } = require('../Core/transactionController');

module.exports = {
  createAProduct: (models) => async (req, res, next) => {
    const { tipo_producto, marca_producto, modelo_producto } = req.body;

    let transaction;

    try {
      transaction = await sequelize.transaction();

      models.producto
        .create(
          {
            tipo_producto,
            marca_producto,
            modelo_producto,
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

  updateProduct: (models, sequelize) => async (req, res, next) => {
    const { tipo_producto, marca_producto, modelo_producto } = req.body;

    updateTransaction(
      req,
      res,
      next,
      {
        tipo_producto,
        marca_producto,
        modelo_producto,
      },
      sequelize,
      models,
      'producto'
    );
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
};
