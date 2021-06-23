// Requiriendo la variables de entorno en el archivo principal de la app
require('dotenv').config();

const fs = require('fs');
const https = require('https');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const errorHandler = require('./api/middlewares/error');
const authMiddleware = require('./api/middlewares/auth');
const { models } = require('./api/models/index.js');
const { registerRoutes } = require('./api/routes/v1');

const { port } = require('./api/config/config');

//Implementar luego HEMET npm para dar seguridad
//Desactiva la cabecera por la cual se puede extraer si se esta usando express
app.disable('x-powered-by');

app.use(
  cors({
    origin: ['http://192.168.0.27:8080/', 'https://localhost:8080'],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


//Registrando las rutas

registerRoutes(app, router, models);

app.use(authMiddleware);

app.use(errorHandler);

https
  .createServer(
    {
      key: fs.readFileSync('./src/api/utils/certificates/Private.key'),
      cert: fs.readFileSync('./src/api/utils/certificates/Certificate.crt'),
    },
    app
  )
  .listen(port, () => {
    console.log(`Server in port: ${port}`);
  });
