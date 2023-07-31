/**
 * API root path: http://localhost:3000/v1/
 * provider router. the provider determinates the type of registration, which could be either local or by google oauth2
 */
import { NextFunction, Request, Response, Router } from "express";
import { MongodbProviderRepository } from "../repositories/mongodbProviderRepository";
import { ProviderController } from "../controllers/providerController";
import { successResponse } from "../lib";


const mongodbProviderRepository = new MongodbProviderRepository();
const providerController = new ProviderController(mongodbProviderRepository);


const router = Router();


router

/**
 * Method: POST
 * Path: http://localhost:3000/v1/provider
 */
.post('/', async(req: Request, res: Response, next: NextFunction) => {
    let { providername } = req.body;

    try {
        const provider = await providerController.create(providername);

        return successResponse(res, {
            message: "Provider created",
            success: true,
            status_code: 201,
            results: provider
        })

    } catch (error) {
        next(error);
    }
})


export default router;