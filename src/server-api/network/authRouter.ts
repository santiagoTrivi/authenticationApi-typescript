/**
 * API root path: http://localhost:3000/v1/
 * auth router for user authentication
 */
import { NextFunction, Request, Response, Router } from "express";
import { MongodbUserRepository } from "../repositories/mongodbUserRepository";
import  AuthController  from "../controllers/authController";
import { singjwtoken, successResponse, verifyGoogleToken } from "../lib";
import { clientInputValidation } from "../middewares";
import { googleOauth, loginSchema, userSchema } from "../lib/zodSchema";

const mongodbUserRepository = new MongodbUserRepository();
const authController = new AuthController(mongodbUserRepository);

const router = Router();

router

/**
 * Method: POST
 * http://localhost:3000/v1/auth/signup
 */
.post('/signup', clientInputValidation(userSchema), async(req: Request, res: Response, next: NextFunction) => {
    let {username, email, password, birthdate} = req.body;
    
    try {
        const user = await authController.signup(username, email, password, birthdate);
        const accesstoken = await singjwtoken(user.user_id);
        res.cookie('accesstoken',accesstoken, { maxAge: 10800, httpOnly: true });

        return successResponse(res, {
            message: "user created", 
            results: {id: user.user_id, accesstoken}, 
            status_code: 201, 
            success: true
        })

    } catch (error) {
        next(error);
    }
})

/**
 * Method: POST
 * http://localhost:3000/v1/auth/login
 */
.post('/login', clientInputValidation(loginSchema), async(req: Request, res: Response, next: NextFunction) => {

    let {email, password} = req.body;

    try {

        const user = await authController.login({email, password});
        const accesstoken = await singjwtoken(user.user_id);
        res.cookie('accesstoken',accesstoken, { maxAge: 10800, httpOnly: true });

        return successResponse(res, {
            message: "login successflly", 
            results: {id: user.user_id, accesstoken}, 
            status_code: 201, 
            success: true
        })

    } catch (error) {
        next(error);
    }
})

/**
 * Method: POST
 * Paht: http://localhost:3000/v1/auth/oauth2/google
 */
.post('/oauth2/google', clientInputValidation(googleOauth), async(req: Request, res: Response, next: NextFunction) => {
    let { g_csrf_token } = req.body;
    
    const {email} = await verifyGoogleToken(g_csrf_token);
    
    const user = await authController.oauth2ByGoogle(email);
    const accesstoken = await singjwtoken(user.user_id);
    res.cookie('accesstoken',accesstoken, { maxAge: 10800, httpOnly: true });

    return successResponse(res, {
        message: 'done',
        results: {id: user.user_id, accesstoken},
        status_code: 201,
        success: true
    })
    
})

export default router;