import express from 'express';
import morgan from 'morgan';
import MainRouter from '../routes';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { info } from '../docs/info';
import compression from 'compression';
import cors from 'cors';

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(compression());
app.use("/api", MainRouter);
app.use(cors());

// DOCUMENTACION
const specs = swaggerJSDoc(info)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

// Middleware de errores:
app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).json({
      error: 'an error occurred',
      msg: err.stack
    });
  });

export default app