import { UnathorizedError } from "../../domain/common/exceptions/UnauthorizedError";
import { Provider } from "../../domain/provider/providerEntity";
import { ProviderRepository } from "../../domain/provider/providerRepository";
import { Existprovider } from "../../domain/provider/services/ExistProvider";




export class CreateProviderUseCase{

    private readonly providerRepository: ProviderRepository
    private readonly existProvider: Existprovider;

    constructor(providerRepo: ProviderRepository){
        this.providerRepository = providerRepo;
        this.existProvider = new Existprovider(providerRepo);
    }

    run = async(data: Provider) => {

        const existprovider = await this.existProvider.run(data.provider);

        if(existprovider) throw new UnathorizedError('Provider already registered', 'provider');

        const newProvider = await this.providerRepository.save(data);

        return newProvider;
    }

}