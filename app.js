import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from "express";
import homeR from './src/routes/homeR';
import userR from './src/routes/userR';
import tokenRoutes from './src/routes/tokenRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeR);
    this.app.use('/users/', userR);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
