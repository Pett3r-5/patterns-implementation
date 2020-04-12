import {Package} from '../packages/Package'

export abstract class PackageCreationFactory {
    abstract create():Package

    applyBusinessLogic():boolean {
        return true
    }
}