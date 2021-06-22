module.exports = {
  getUserMeucci: (models, dni) =>
    models.uVi_Maestro.findOne({
      where: {
        dni,
      },
      attributes: ['meucciid', 'dni', 'nombrecompleto', 'cuenta', 'subarea', 'servicio', 'cargo'],
    }),
};
