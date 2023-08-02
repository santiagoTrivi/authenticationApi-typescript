import dotenv from 'dotenv';
import {config} from './server-api/config/config';
import Server from './server-api/server';



dotenv.config();

const port = config.server.port;

const server = new Server(port);


server.listen();