import { NextFunction, Request, Response, Router } from "express";
import { MongodbProviderRepository } from "../repositories/mongodbProviderRepository";
import { ProviderController } from "../controllers/providerController";
import { successResponse } from "./serverResponse";


const mongodbProviderRepository = new MongodbProviderRepository();
const providerController = new ProviderController(mongodbProviderRepository);


const router = Router();

router
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