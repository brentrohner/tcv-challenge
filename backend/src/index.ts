import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import routes from './routes';
import { connectToDb } from './utils/dbConnection';

connectToDb.then(() => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', routes.itemRoutes);

  app.listen(9000, () => {
    console.log('Server has started');
  });
});
