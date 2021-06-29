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
};
