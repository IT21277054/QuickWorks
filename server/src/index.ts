import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import logger from '../log/logger';
import { accountRoute } from './routes/account.route'


require('dotenv').config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use('/api/account', accountRoute);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  logger.info('MongoDB connected');
  app.on('error', (err) => {
    logger.error(err);
  });
  app.listen(port, () => {
    logger.info(`TypeScript with Express
         http://localhost:${port}/`);
  });
});
