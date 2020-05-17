import AuthDTO from './AuthDTO'
import Address from './Address'


export default interface ClientUser  {
    name:string
    password:string
    age:number
    email:string
    permissionLevel:number
    recoveringEmail:string
    address:Address
    preferences:Array<String>

}