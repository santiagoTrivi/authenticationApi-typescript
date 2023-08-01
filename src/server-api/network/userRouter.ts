import { NextFunction, Request, Response, Router } from "express";
import { MongodbUserRepository } from "../repositories/mongodbUserRepository";
import { UserController } from "../controllers/userController";
import { verifyAccessToken } from "../middewares/verifyAccessToken";
import { successResponse } from "../lib";


const mongoUserRepository = new MongodbUserRepository();
const userController = new UserController(mongoUserRepository);

const router = Router();

router

.get('/:id',verifyAccessToken , async(req: Request, res: Response, next: NextFunction) => {

    let { id } = req.params;
    
    try {
        const user = await userController.getUserByid(id);

        const {password, ...userFound} = user;
        
        return successResponse(res, {
            message: 'user found',
            status_code: 200,
            success: true,
            results: {userFound}
        })

    } catch (error) {
        next(error)
    }

})


export default router;