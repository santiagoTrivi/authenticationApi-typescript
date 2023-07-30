import { CreateProviderUseCase } from "../../application/provider/createProviderUseCase";
import { uuid as v4 } from "uuidv4";
import { ProviderRepository } from "../../domain/provider/providerRepository";
import { Provider } from "../../domain/provider/providerEntity";



export class ProviderController{
    private createProvider;

    constructor(private readonly providerRepository: ProviderRepository){
        this.createProvider = new CreateProviderUseCase(this.providerRepository);
    }

    create = async(provider: string): Promise<Provider> => {
        
        const newProvider: Provider = {
            provider_id: v4(),
            provider
        }

        const createdProvider = this.createProvider.run(newProvider);

        return createdProvider;
    }
}


