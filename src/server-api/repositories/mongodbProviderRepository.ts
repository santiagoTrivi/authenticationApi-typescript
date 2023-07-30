import { Provider } from "../../domain/provider/providerEntity";
import { ProviderRepository } from "../../domain/provider/providerRepository";
import { ProviderModel } from "../ormModel/providerModel";


export class MongodbProviderRepository implements ProviderRepository{

    async getById(id: string): Promise<Provider> {

        const provider = await ProviderModel.findOne({id});

        if(!provider) return null;

        const data: Provider = {
            provider_id: provider.provider_id,
            provider: provider.provider
        }

        return data;
    }
    async getByProvider(provider: string): Promise<Provider> {
        
        const providertarget = await ProviderModel.findOne({provider});

        if(!providertarget) return null;

        const data: Provider = {
            provider_id: providertarget.provider_id,
            provider: providertarget.provider
        }

        return data;

    }
    async save(provider: Provider): Promise<Provider> {
        
        const newProvider = new ProviderModel(provider);
        await newProvider.save();

        const createdProvider: Provider = {
            provider_id: newProvider.provider_id,
            provider: newProvider.provider
        }

        return createdProvider;

    }

    
}