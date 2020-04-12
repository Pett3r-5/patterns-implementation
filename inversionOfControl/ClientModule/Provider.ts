export interface Provider {
    fetchProductFromCollection(productName:string): Array<any>
}