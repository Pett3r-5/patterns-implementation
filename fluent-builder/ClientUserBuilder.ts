import AuthDTO from './models/AuthDTO'
import Address from './models/Address'
import Builder from './Builder'
import ClientUser from './models/ClientUser'

/*
    inner classes are not supported in TS, so this custom implementation makes ClientUser accessible only in
    this file's scope, and exports the builder.
    There is an interface ClientUser that allows objects of this type without needing to export the class ClietUser
*/

class ClientUserImpl implements ClientUser {
    name:string
    password:string
    age:number
    email:string
    permissionLevel:number
    recoveringEmail:string
    address:Address
    preferences:Array<String>


    public constructor(name?:string,
        password?:string,
        age?:number,
        email?:string,
        permissionLevel?:number,
        recoveringEmail?:string,
        address?:Address,
        preferences?:Array<String>){

        this.name = name
        this.password = password
        this.age = age
        this.email = email
        this.permissionLevel = permissionLevel
        this.recoveringEmail = recoveringEmail
        this.address = address
        this.preferences =preferences

    }

    
}


export default class ClientUserBuilder implements Builder  {
    clientUserImpl:ClientUserImpl

    public constructor(){
       this.clientUserImpl = new ClientUserImpl()
    }

    getInstance():ClientUserBuilder{
        this.clientUserImpl = new ClientUserImpl()
        return new ClientUserBuilder();
    }

    setBasicLoginInfo(name:string, password:string):ClientUserBuilder{
        this.clientUserImpl.name = name
        this.clientUserImpl.password = password

        return this
    }

    setBasicAuth(authDTO:AuthDTO):ClientUserBuilder{
        this.clientUserImpl.age = authDTO.age
        this.clientUserImpl.email =authDTO.email
        this.clientUserImpl.permissionLevel = authDTO.permissionLevel
        this.clientUserImpl.recoveringEmail=authDTO.recoveringEmail
        return this
    }

    setPermissionLevel(permissionLevel:number):ClientUserBuilder{
        this.clientUserImpl.permissionLevel = permissionLevel
        return this
    }
    

    public setAddress(address:Address):ClientUserBuilder {
        this.clientUserImpl.address = address;
        return this
    }

    public setPreferences(preferences:Array<string>):ClientUserBuilder {
        this.clientUserImpl.preferences = preferences.map(element=>element)
        return this
    }

    public build = ():ClientUser=> (new ClientUserImpl(this.clientUserImpl.name,
            this.clientUserImpl.password,
            this.clientUserImpl.age,
            this.clientUserImpl.email,
            this.clientUserImpl.permissionLevel,
            this.clientUserImpl.recoveringEmail,
            this.clientUserImpl.address,
            this.clientUserImpl.preferences)
    )
    
}