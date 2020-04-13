export interface ProductRepository {
    findByName(name:string):Array<any>
}