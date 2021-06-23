module.exports = {
  getUserMeucci: (models, dni) =>
    models.uVi_Maestro.findOne({
      where: {
        dni: dni || req.params.dni
      },
      attributes: ['meucciid', 'dni', 'nombrecompleto', 'cuenta', 'subarea', 'servicio', 'cargo'],
    }),

    getUserMeucci2: (models, dni) => (req, res, next) =>
    models.uVi_Maestro.findOne({
      where: {
        dni: dni || req.params.dni
      },
      attributes: ['meucciid', 'dni', 'nombrecompleto', 'cuenta', 'subarea', 'servicio', 'cargo'],
    }).then(data => res.json(data)),
};
