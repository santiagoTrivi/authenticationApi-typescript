import { NextFunction, Request, Response } from "express";
import { mongodbProviderRepository } from "../../../components/provider/infrastructure/mongodbProviderRepository";
import { CreateProviderUseCase } from "../../../components/provider/application/createProviderUseCase";
import { Provider } from "../../../components/provider/domain/providerEntity";
import { uuid } from "uuidv4";
import { successResponse } from "../../network/serverResponse";


const providerRepository = new mongodbProviderRepository;
const createdProviderUseCase = new CreateProviderUseCase(providerRepository);

export const createProviderController = async(req: Request, res: Response, next: NextFunction) => {

    const {providername} = req.body;
    
    const newProvider: Provider = {
        id: uuid(),
        provider: providername
    }

    try {


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