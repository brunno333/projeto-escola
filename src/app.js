import dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config();

import './database';

import express from "express";
import cors from 'cors';
import helmet from 'helmet';

import homeR from './routes/homeR';
import userR from './routes/userR';
import tokenRoutes from './routes/tokenRoutes';
import alunoR from './routes/alunoR';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  'http://localhost:3000'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
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
