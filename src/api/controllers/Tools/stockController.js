module.exports = {
  getAllProductsStock: (models, req, sequelize) => {
    // Entrada
    return models.detalle_transaccion
      .findAll({
        where: { anulado: 0 },
        include: [
          {
            model: models.transaccion,
            as: 'transaccion',
            where: {
              modo: 'entrada',
            },
            attributes: [],
          },
        ],
        limit: req.query.limit,
        order: req.query.order,
        attributes: [
          'id_producto',
          [sequelize.fn('sum', sequelize.col('cantidad')), 'cantidad_total'],
        ],
        group: ['id_producto'],
      })
      .then((productos_entrada) => {
        if (!productos_entrada) return next(404);

        // Salida
        return new Promise((res) => {
          models.detalle_transaccion
            .findAll({
              where: { anulado: 0 },
              include: [
                {
                  model: models.transaccion,
                  as: 'transaccion',
                  where: {
                    modo: 'salida',
                  },
                  attributes: [],
                },
              ],
              limit: req.query.limit,
              order: req.query.order,
              attributes: [
                'id_producto',
                [sequelize.fn('sum', sequelize.col('cantidad')), 'cantidad_total'],
              ],
              group: ['id_producto'],
            })
            .then((productos_salida) => {
              // Extrae stock
              const stock_productos = productos_entrada.map((producto_entrada) => {
                const producto_salida = productos_salida.find(
                  (producto_salida) => producto_salida.id === producto_entrada.id
                );
                return {
                  id_producto: producto_entrada.id_producto,
                  cantidad:
                    producto_entrada.dataValues['cantidad_total'] -
                    producto_salida.dataValues['cantidad_total'],
                };
              });
              res(stock_productos);
            });
        });
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json({
          message: 'Error interno, no se han podido obtener los productos',
        });
      });
  },
};
