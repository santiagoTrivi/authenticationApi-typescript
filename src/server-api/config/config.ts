import dotenv from 'dotenv';


dotenv.config()

const PORT = process.env.PORT ? Number(process.env.PORT): 3000;
const DATABASE = process.env.DATABASE || '';
const JWT_PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const JWT_PUBLIC_KEY = process.env.PUBLIC_KEY || '';


export const config = {
    server:{
        port: PORT
    },
    mongo:{
        url: DATABASE
    },
    JWT: {
        JWT_PRIVATE_KEY,
        JWT_PUBLIC_KEY
    },
    PROVIDERS: {
        local: 'local',
        google: 'google'
    }
}