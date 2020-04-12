import {ProviderImpl} from '../ProviderModule/ProviderImpl'

class ClientImpl {
    private providerImpl:ProviderImpl = new ProviderImpl();
    renderProduct({id, name, description}):Array<any>{
        return this.providerImpl.fetchProductFromCollection(name);
    }
}