import Address from './Address'

export default class ClientUser {
    name:string
    password:string
    age:number
    email:string
    permissionLevel:number
    recoveringEmail:string
    Address:Address
    preferences:Array<String>

    private constructor(){

    }

    private static ClientUserBuilder = class  {
    

        build(){
            new ClientUser()
        }
    }
}