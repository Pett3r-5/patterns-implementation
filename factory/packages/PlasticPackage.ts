import {Package} from './Package'

export class PlasticPackage implements Package {
    name:string
    price: number
    doSomething(): boolean {
        return true;
    }
}