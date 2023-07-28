import { NextFunction, Request, Response } from "express";
import { MongodbProviderRepository } from "../../../components/provider/infrastructure/mongodbProviderRepository";
import { CreateProviderUseCase } from "../../../components/provider/application/createProviderUseCase";
import { Provider } from "../../../components/provider/domain/providerEntity";
import { uuid as v4 } from "uuidv4";
import { successResponse } from "../../network/serverResponse";


const providerRepository = new MongodbProviderRepository();
const createdProviderUseCase = new CreateProviderUseCase(providerRepository);

export const createProviderController = async(req: Request, res: Response, next: NextFunction) => {

    const {providername} = req.body;
    
    try {
        
    const newProvider: Provider = {
        provider_id: v4(),
        provider: providername
    }



        const provider = await createdProviderUseCase.run(newProvider);

        return successResponse(res, {
            message: "Provider created",
            success: true,
            status_code: 201,
            results: provider
        })
        
    } catch (error) {
        next(error);
    }

}