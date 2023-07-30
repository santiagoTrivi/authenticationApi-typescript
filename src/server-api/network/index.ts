import  express  from "express"
import authRouter from "./authRouter";
import providerRouter from "./providerRouter";
import staticFileRouter from "./staticFiles";

const serverEndpoint = express();

/**
 * API root path: http://localhost:3000/v1/
 */

serverEndpoint.use('/home', staticFileRouter)

/**
 *  API auth path: http://localhost:3000/v1/auth
 */
serverEndpoint.use('/auth', authRouter);



/**
 *  API provider path: http://localhost:3000/v1/provider
 */

serverEndpoint.use('/provider', providerRouter)

export default serverEndpoint;
