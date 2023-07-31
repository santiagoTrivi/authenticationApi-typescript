import express, { Application } from "express";
import cors from 'cors';
import morgan from "morgan";
import { mongodb } from "./config/database";
import cookieParser from "cookie-parser";
import { errorHanddle } from "./middewares/errorHandle";
import  serverEndpoint  from "./network/index";
import path from "path";

export default class ServerChat{

    private app: Application
    private port: number


    constructor(port: number){
        this.app = express();
        this.port = port;
        this.databaseHandle();
        this.middlewares();
        this.routers();
    }

    async databaseHandle(){
        mongodb();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(cookieParser());

        if(process.env.NODE_ENV === 'development'){
            this.app.use(morgan('dev'));
            console.log('morgan is on');
        }
    }

    routers() {
        
        this.app.use('/v1', serverEndpoint, errorHanddle)
        //static path server
        this.app.use(express.static(path.join(__dirname, 'views')))
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running on http//localhost:${this.port}/`);
        });
    }

}