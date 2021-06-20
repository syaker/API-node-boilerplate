module.exports = {
  getUserMeucci: (models) => (req, res, next) => {
    models.uVi_Maestro
      .findOne({
        where: {
          dni: req.params.dni,
        },
        attributes: ['meucciid', 'dni', 'nombrecompleto', 'cuenta', 'subarea', 'servicio', 'cargo'],
      })
      .then((user) => {
        if (!user) return next(404);
        res.status(200).json(user);
      })
      .catch((err) => {
        console.log(`No se ha podido obtener el usuario : \n ${err}`);
        return next(500);
      });
  },
  getNameUserMeucci: (models, dni) => {
    return models.uVi_Maestro.findOne({
      where: {
        dni,
      },
      attributes: ['nombrecompleto'],
    });
  },
};
