import {CardboardPackage} from './packages/CardboardPackage'
import {PlasticPackage} from './packages/PlasticPackage'
import {Package} from './packages/Package'
import { CardboardPackageCreationFactory } from './factories/CardboardPackageCreationFactory'
import { PlasticPackageCreationFactory } from './factories/PlasticPackageCreationFactory'

const getCardboardPackage = ():Package=> {
    const cardboardPackageCreationFactory:CardboardPackageCreationFactory = new CardboardPackageCreationFactory();
    const cardboardPackage:CardboardPackage = cardboardPackageCreationFactory.create();
    console.log(cardboardPackage)
    return cardboardPackage;
}

const getMusic = ():Package=> {
    const plasticPackageCreationFactory:PlasticPackageCreationFactory = new PlasticPackageCreationFactory();
    const plasticPackage:PlasticPackage = plasticPackageCreationFactory.create();
    console.log(plasticPackage)
    return plasticPackage;
}

getCardboardPackage();
getMusic();