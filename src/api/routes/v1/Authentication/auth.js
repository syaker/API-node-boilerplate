const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secret } = require('../../../config/config');
const { nameAndLastName } = require('../../../utils/filters');
const { getUserMeucci } = require('../../../controllers/Users/userController');

//Crea token de validacion
//Parametros:
//user - String
//password - String

module.exports = (router, models) => {
  router.post('/auth', (req, res, next) => {
    const { user, password } = req.body;

    if (!user || !password) {
      return res.json({
        mensaje: 'Por favor ingrese su usuario y/o password',
      });
    }

    if (!isNaN(user)) {
      //Buscamos en el modelo user el usuario
      models.user
        .findOne({
          where: {
            user,
          },
        })
        .then((infUser) => {
          if (infUser === null) return next(404);

          return new Promise((res, rej) => {
            bcrypt.compare(password, infUser.dataValues.password, (err, result) => {
              res(result);
            });
          }).then(async (result) => {
            if (result === false) return next(401);

            const userData = {
              id: infUser.dataValues.id_user,
              role: infUser.dataValues.role,
            };

            await getUserMeucci(models, user)
              .then((username) => {
                const activeUser = {
                  fullName: nameAndLastName(username),
                  rol: userData.role,
                };

                const token = jwt.sign(userData, secret, {
                  expiresIn: Number(process.env.TIME_EXPIRED) || 90000,
                });

                res
                  //Cuando este en AWS agregar secure:true, para uso con https
                  .cookie('token', token, {
                    //Descomentar en prod
                    //domain: 'https://172.58.80.201:8443',
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true,
                  })
                  .send(activeUser);
              })
              .catch((err) => {
                console.log(`No se ha podido obtener el usuario : \n ${err}`);
                return next(500);
              });
          });
        });
    }
  });

  return router;
};
