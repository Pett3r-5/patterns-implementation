import {Product} from './Product'
import {SoftwareProject} from './SoftwareProject'

const p:Product = new Product("PhoneOS", new SoftwareProject());
const result:Array<any> = p.presentPaperWork();
console.log(result[0])
