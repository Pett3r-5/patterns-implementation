import {CardboardPackage} from './CardboardPackage'
import {PlasticPackage} from './PlasticPackage'
import {Package} from './Package'
import { CardboardPackageCreationFactory } from './CardboardPackageCreationFactory'
import { PlasticPackageCreationFactory } from './PlasticPackageCreationFactory'

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