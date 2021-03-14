import express from 'express';
import cors from 'cors';
import routes from './Routers/routes';
import './config/Database';

const server = express();
server.use(cors());
server.use(express.json());

server.use(routes);

export default server;
