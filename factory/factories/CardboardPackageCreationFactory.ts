import {CardboardPackage} from '../packages/CardboardPackage'
import {Package} from '../packages/Package'
import { PackageCreationFactory } from './PackageCreationFactory'

//returns an new instance of Book every time
export class CardboardPackageCreationFactory extends PackageCreationFactory {
    create():Package {
        return new CardboardPackage()
    }
}