import  express  from "express"
import authRouter from "./authRouter";
import providerRouter from "./providerRouter";


const serverEndpoint = express();

/**
 * API root path: http://localhost:3000/v1/
 */



/**
 *  API auth path: http://localhost:3000/v1/auth
 */
serverEndpoint.use('/auth', authRouter);



/**
 *  API provider path: http://localhost:3000/v1/provider
 */

serverEndpoint.use('/provider', providerRouter)

export default serverEndpoint;
