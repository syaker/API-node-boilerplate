const { updateTransaction } = require('../Core/transactionController');

module.exports = {
  getAllPurchases: (models) => (req, res, next) => {
    models.transaccion
      .findAll({
        where: { anulado: 0 },
        limit: req.query.limit,
        order: req.query.order,
        attributes: { exclude: ['anulado'] },
      })
      .then((data) => {
        if (!data) return next(404);
        res.status(200).json(data.dataValues);
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json({
          message: 'Error interno, no se han podido obtener las transaccion de compra',
        });
      });
  },

  createPurchase: (models, sequelize) => async (req, res, next) => {
    const {
      id_sede,
      id_tipo_transaccion, //compra, alquiler, devolucion
      id_subtipo_transaccion, // presencial, etc.
      id_usuario_externo,
      id_usuario_meucci,
      id_proveedor,
      id_estado,
      id_conductor,
      numero_factura,
      direccion_destino,
      distrito_destino,
      referencia_destino,
      direccion_origen,
      distrito_origen,
      referencia_origen,
      productos, //Array de objetos -> id_producto, cantidad, numeros_serie (Array)
      guia, //
    } = req.body;

    let transaction;

    try {
      transaction = await sequelize.transaction();

      models.transaccion
        .create(
          {
            id_sede,
            id_tipo_transaccion,
            id_subtipo_transaccion,
            id_proveedor,
            id_estado,
            id_conductor,
            numero_factura,
            direccion_origen,
            distrito_origen,
            referencia_origen,
            guia,
          },
          { transaction }
        )
        .then(async (result) => {
          if (productos == null || Object.values(productos).includes(null)) return next(400);

          await Promise.all(
            productos.map((producto) => {
              return models.detalle_transaccion
                .create(
                  {
                    id_transaccion: result.dataValues.id_transaccion,
                    id_producto: producto.id_producto,
                    id_usuario_meucci,
                    id_usuario_externo,
                    direccion_destino,
                    distrito_destino,
                    referencia_destino,
                    cantidad: producto.cantidad,
                  },
                  { transaction }
                )
                .then(async (result) => {
                  //Registrar numeros de serie
                  await Promise.all(
                    producto.numeros_serie.map((numero_serie) => {
                      models.numero_serie.create(
                        {
                          id_detalle_transaccion: result.dataValues.id_detalle_transaccion,
                          id_producto: producto.id_producto,
                          numero_serie,
                        },
                        { transaction }
                      );
                    })
                  );
                });
            })
          )
            .then(async () => {
              await transaction.commit();
              res.status(200).send('OK');
            })
            .catch(async (error) => {
              console.log(error);

              if (error) await transaction.rollback();
              res.status(500).send('Error');
            });
        });
    } catch (error) {
      console.log(error)
      if (error) await transaction.rollback();
      res.status(500).send('Error');
    }
  },

  updatePurchase: (models, sequelize) => async (req, res, next) => {
    const {
      id_sede,
      id_tipo_transaccion,
      id_subtipo_transaccion,
      id_usuario_externo,
      id_usuario_meucci,
      id_proveedor,
      id_estado,
      id_conductor,
      numero_factura,
      direccion_destino,
      distrito_destino,
      referencia_destino,
      direccion_origen,
      distrito_origen,
      referencia_origen,
    } = req.body;

    updateTransaction(
      req,
      res,
      next,
      {
        id_sede,
        id_tipo_transaccion,
        id_subtipo_transaccion,
        id_usuario_externo,
        id_usuario_meucci,
        id_proveedor,
        id_estado,
        id_conductor,
        numero_factura,
        direccion_destino,
        distrito_destino,
        referencia_destino,
        direccion_origen,
        distrito_origen,
        referencia_origen,
      },
      sequelize,
      models
    );
  },
};
