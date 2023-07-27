import { ProviderRepository } from "../providerRepository";



export class Existprovider{
    constructor(private readonly ProviderRepository: ProviderRepository){}

    async run(providername: string): Promise<boolean>{
        const provider = await this.ProviderRepository.getByProvider(providername);

        if(!provider) return false;
        
        return true;
    }
}