const { promises } = require('../Core/promisesController');
const { updateTransaction } = require('../Core/transactionController');
const { getAllProductsStock } = require('../Tools/stockController');

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

  findAllProductsAvailable: (models, sequelize) => async (req, res, next) => {
    getAllProductsStock(models, req, sequelize).then(productos_stock => {
      console.log(productos_stock)
      // models.producto.findAll({
      //   where: {
      //     id_producto
      //   }
      // })
    })
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


// .then(async (stock_productos) => {
//   const promisesProductos = await stock_productos.map((producto) => {
//     return {
//       producto: models.producto.findOne({
//         where: { id_producto: producto.id_producto },
//         attributes: { exclude: 'anulado' },
//       }),
//       cantidad: producto.cantidad,
//     };
//   });
//   Promise.all(promisesProductos).then((productos) => {
//     productos.map((producto) => {
      
//     })
//   });
// });