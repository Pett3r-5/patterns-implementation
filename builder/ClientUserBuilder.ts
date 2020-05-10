import Builder from './Builder'
import User from './User'
import ClientUser from './ClientUser'
import Address from './models/Address'
import AuthDTO from './models/AuthDTO'

export default class ClientUserBuilder implements Builder {
    private user: ClientUser

    setBasicLoginInfo(name:string, password:string):void{
        this.user.name = name
        this.user.password = password
    }

    setBasicAuth(authDTO:AuthDTO):void{
        this.user.age = authDTO.age
        this.user.email =authDTO.email
        this.user.permissionLevel = authDTO.permissionLevel
        this.user.recoveringEmail=authDTO.recoveringEmail
    }

    setPermissionLevel(permissionLevel:number):void{
        this.user.permissionLevel = permissionLevel
    }
    

    public setAddress(address:Address):void {
        this.user.Address = address;
    }

    public setPreferences(preferences:Array<string>):void {
        this.user.preferences = preferences.map(element=>element)
    }

    build():User{
        return this.user
    }
}