import { ProductRepository } from "../ProviderModule/ProductRepository";

export class ProductRepositoryImpl implements ProductRepository {
    findByName(name:string):Array<any>{
        //database mocked query
        return [1, 2, 3]
    }
}