import dotenv from 'dotenv';
import {config} from './server-api/config/config';
import ServerChat from './server-api/server';
import serverrouters from './server-api/network/routers';


dotenv.config();

const port = config.server.port;

const server = new ServerChat(port);

server.routers('/rest-api/v1', serverrouters);


server.listen();

