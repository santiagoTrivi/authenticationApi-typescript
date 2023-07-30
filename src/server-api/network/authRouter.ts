import { NextFunction, Request, Response, Router } from "express";
import { MongodbUserRepository } from "../repositories/mongodbUserRepository";
import  AuthController  from "../controllers/authController";
import { singjwtoken } from "../config";
import { successResponse } from "./serverResponse";

const mongodbUserRepository = new MongodbUserRepository();
const authController = new AuthController(mongodbUserRepository);

const router = Router();

router
.post('/signup', async(req: Request, res: Response, next: NextFunction) => {
    let {username, email, password, birthdate} = req.body;
    
    try {
        const user = await authController.signup(username, email, password, birthdate);
        const accesstoken = await singjwtoken(user.user_id);
        res.cookie('accesstoken',accesstoken, { maxAge: 10800, httpOnly: true });

        return successResponse(res, {
            message: "user created", 
            results: {user, accesstoken}, 
            status_code: 201, 
            success: true
        })

    } catch (error) {
        next(error);
    }
})

.post('/login', async(req: Request, res: Response, next: NextFunction) => {

    let {username, password} = req.body;

    try {

        const user = await authController.login({username, password});
        const accesstoken = await singjwtoken(user.user_id);
        res.cookie('accesstoken',accesstoken, { maxAge: 10800, httpOnly: true });

        return successResponse(res, {
            message: "login successflly", 
            results: {user, accesstoken}, 
            status_code: 201, 
            success: true
        })

    } catch (error) {
        next(error);
    }
})

export default router;