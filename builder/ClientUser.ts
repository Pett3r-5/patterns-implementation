import User from './User'
import Address from './models/Address'

export default class ClientUser implements User {
    name:string
    password:string
    age:number
    email:string
    permissionLevel:number
    recoveringEmail:string
    Address:Address
    preferences:Array<String>
    
}