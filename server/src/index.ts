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

const app = express();
app.use(express.json());

// Import your worker routes
import workerRoutes from './routes/admin.route';

// Use your worker routes
app.use('/workers', workerRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
