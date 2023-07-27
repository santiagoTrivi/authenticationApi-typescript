import { Provider } from "../domain/providerEntity";
import { ProviderRepository } from "../domain/providerRepository";
import { ProviderModel } from "./providerModel";


export class mongodbProviderRepository implements ProviderRepository{

    async getById(id: string): Promise<Provider> {

        const provider = await ProviderModel.findOne({id});

        if(!provider) return null;

        const data: Provider = {
            id: provider.id,
            provider: provider.provider
        }

        return data;
    }
    async getByProvider(provider: string): Promise<Provider> {
        
        const providertarget = await ProviderModel.findOne({provider});

        if(!providertarget) return null;

        const data: Provider = {
            id: providertarget.id,
            provider: providertarget.provider
        }

        return data;

    }
    async save(provider: Provider): Promise<Provider> {
        
        const newProvider = new ProviderModel(provider);
        await newProvider.save();

        const createdProvider: Provider = {
            id: newProvider.id,
            provider: newProvider.provider
        }

        return createdProvider;

    }

    
}