import { Provider } from "./providerEntity";



export interface ProviderRepository{
    getById(id: string): Promise<Provider | null>;
    getByProvider(provider: string): Promise<Provider | null>;
    save(provider: Provider): Promise<Provider | null>;
}