import {Package} from './Package'

export class CardboardPackage implements Package {
    name:string
    price: number
    doSomething(): boolean {
        return false;
    }
}