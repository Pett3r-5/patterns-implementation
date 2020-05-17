import AuthDTO from './models/AuthDTO'
import Address from './models/Address'
import Builder from './Builder'

/*
    inner classes are not supported in TS, so this regular implementation doesnt work on method call
*/

export default class ClientUnsupportedUser {
    name:string
    password:string
    age:number
    email:string
    permissionLevel:number
    recoveringEmail:string
    address:Address
    preferences:Array<String>

    private constructor(name:string,
        password:string,
        age:number,
        email:string,
        permissionLevel:number,
        recoveringEmail:string,
        address:Address,
        preferences:Array<String>){

        this.name = name
        this.password = password
        this.age = age
        this.email = email
        this.permissionLevel = permissionLevel
        this.recoveringEmail = recoveringEmail
        this.address = address
        this.preferences =preferences

    }

    public static ClientUnsupportedUserBuilder = class implements Builder  {
        name:string
        password:string
        age:number
        email:string
        permissionLevel:number
        recoveringEmail:string
        address:Address
        preferences:Array<String>

        private constructor(){

        }

        getInstance(){
            return new ClientUnsupportedUser.ClientUnsupportedUserBuilder();
        }

        setBasicLoginInfo(name:string, password:string):any{
            this.name = name
            this.password = password
            return this
        }
    
        setBasicAuth(authDTO:AuthDTO):any{
            this.age = authDTO.age
            this.email =authDTO.email
            this.permissionLevel = authDTO.permissionLevel
            this.recoveringEmail=authDTO.recoveringEmail
            return this
        }
    
        setPermissionLevel(permissionLevel:number):any{
            this.permissionLevel = permissionLevel
            return this
        }
        
    
        public setAddress(address:Address):any {
            this.address = address;
            return this
        }
    
        public setPreferences(preferences:Array<string>):any {
            this.preferences = preferences.map(element=>element)
            return this
        }

        public build = ():ClientUnsupportedUser=>(
            new ClientUnsupportedUser(this.name,
                this.password,
                this.age,
                this.email,
                this.permissionLevel,
                this.recoveringEmail,
                this.address,
                this.preferences)
        )
    }
}