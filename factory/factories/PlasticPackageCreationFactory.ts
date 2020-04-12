import {PlasticPackage} from '../packages/PlasticPackage'
import {Package} from '../packages/Package'
import { PackageCreationFactory } from './PackageCreationFactory'

//singleton factory
export class PlasticPackageCreationFactory extends PackageCreationFactory {
    private plasticPackage:PlasticPackage
    create():Package {
        if(!this.plasticPackage){
            return new PlasticPackage();
        }
        return this.plasticPackage;
    }
}