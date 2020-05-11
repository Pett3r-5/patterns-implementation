import AuthDTO from './models/AuthDTO'
import Address from './models/Address'
import Builder from './Builder'



export default class ClientUser {
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

    public static ClientUserBuilder = class implements Builder  {
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
            return new ClientUser.ClientUserBuilder();
        }

        setBasicLoginInfo(name:string, password:string):void{
            this.name = name
            this.password = password
        }
    
        setBasicAuth(authDTO:AuthDTO):void{
            this.age = authDTO.age
            this.email =authDTO.email
            this.permissionLevel = authDTO.permissionLevel
            this.recoveringEmail=authDTO.recoveringEmail
        }
    
        setPermissionLevel(permissionLevel:number):void{
            this.permissionLevel = permissionLevel
        }
        
    
        public setAddress(address:Address):void {
            this.address = address;
        }
    
        public setPreferences(preferences:Array<string>):void {
            this.preferences = preferences.map(element=>element)
        }

        build(){
            return new ClientUser(this.name,
                this.password,
                this.age,
                this.email,
                this.permissionLevel,
                this.recoveringEmail,
                this.address,
                this.preferences)
        }
    }
}