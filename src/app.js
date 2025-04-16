import dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config();

import './database';

import express from "express";

import homeR from './routes/homeR';
import userR from './routes/userR';
import tokenRoutes from './routes/tokenRoutes';
import alunoR from './routes/alunoR';
import fotoRoutes from './routes/fotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeR);
    this.app.use('/users/', userR);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoR);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
