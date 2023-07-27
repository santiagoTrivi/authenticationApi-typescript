import { UnathorizedError } from "../../common/domain/exceptions/UnauthorizedError";
import { ProviderRepository } from "../domain/providerRepository";




export class GetProvider{
    private readonly providerRepository: ProviderRepository


    constructor(providerRepo: ProviderRepository){
        this.providerRepository = providerRepo;
    }

    run = async(data: string) => {

        const provider = await this.providerRepository.getByProvider(data);

        if(!provider) throw new UnathorizedError('Provider not registered', 'Provider');

        return provider;

    }
}