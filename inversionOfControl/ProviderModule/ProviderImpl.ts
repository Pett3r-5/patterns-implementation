import {Provider} from '../ClientModule/Provider'
import { ProductRepositoryImpl } from '../RepositoryModule/ProductRepositoryImpl';

export class ProviderImpl implements Provider {
    private productRepositoryImpl:ProductRepositoryImpl= new ProductRepositoryImpl();

    fetchProductFromCollection(productName:string){
        const response:Array<any> = this.productRepositoryImpl.findByName(productName)
        if(!!response){
            return response
        }
        return ["not found"]
    }
}