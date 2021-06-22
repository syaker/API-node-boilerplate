const { promises } = require('../Core/promisesController');
const { sequelize } = require('../../models');

module.exports = {
  createRental: (models) => (req, res, next) => {
    // Primero corrobora que exista una entrada por alquiler
    // Segundo filtra por proveedor
    // Tercero selecciona los productos a devolver
    // Cuarto elimina de los productos en stock los numeros de serie enviados
    // Ejecuta la accion
    promises
      .getAllTransactions(models, req)
      .then((data) =>
        Array.from(data).filter((transaccion) => {
          const tipo_transaccion = transaccion.tipo_transaccion.dataValues;
          return (
            tipo_transaccion.nombre_tipo_transaccion === 'alquiler' &&
            tipo_transaccion.modo_transaccion === 'entrada'
          );
        })
      )
      .then((transacciones_alquiler) => {
        const { id_proveedor } = req.body;
        return transacciones_alquiler.filter(
          (transaccion) => transaccion.proveedor.dataValues.id_proveedor == id_proveedor
        );
      })
      .then(async () => {
        const { id_proveedor, guia, productos, id_estado } = req.body; // Array[]
        let transaction;
        try {
          transaction = await sequelize.transaction();
          models.transaccion
            .create(
              {
                id_proveedor,
                guia,
                id_estado,
                id_tipo_transaccion: req.params.id_tipo,
              },
              { transaction }
            )
            .then(async (result) => {
              if (productos == null || Object.values(productos).includes(null)) {
                await transaction.rollback();
                return next(400);
              }

              await Promise.all(
                productos.map((producto) => {
                  return models.detalle_transaccion
                    .create(
                      {
                        id_transaccion: result.dataValues.id_transaccion,
                        id_producto: producto.id_producto,
                      },
                      { transaction }
                    )
                    .then(async () => {
                      if (!producto.numeros_serie) {
                        await transaction.rollback();
                        return next(400);
                      }
                      //Anula numeros de serie devueltos al proveedor
                      await Promise.all(
                        producto.numeros_serie.map(() => {
                          return models.numero_serie.update(
                            {
                              anulado: 1,
                            },
                            {
                              where: { id_transaccion },
                              returning: true,
                            },
                            { transaction }
                          );
                        })
                      );
                    });
                })
              ).catch(async (err) => {
                console.log(err);
                if (err) await transaction.rollback();
                res.status(500).send('Error');
              });
            });
        } catch (error) {
          console.log(error);
          if (error) await transaction.rollback();
          res.status(500).send('Error');
        }
      });
  },
};
