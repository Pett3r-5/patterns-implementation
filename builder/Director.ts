/*
Optional class, used to define order of building methods
*/

import ClientUserBuilder from './ClientUserBuilder'
import AdminUserBuilder from './AdminUserBuilder'


const mockedHash = ():string=>{
    return "193jdgdflfdj"
}

export default class Director{
    public buildClientUser(clientUserBuilder:ClientUserBuilder):void{
        clientUserBuilder.setBasicAuth({email:"john@hotmail.com", recoveringEmail:"john2@hotmail.com", age:25, permissionLevel: 1})
        clientUserBuilder.setBasicLoginInfo("John", mockedHash())
        clientUserBuilder.setAddress({street:"saint something", number:499, district:"southern", })
        clientUserBuilder.setPreferences(["clothes","gadgets"])
    }

    public bulidAdminUser(adminUserBuilder:AdminUserBuilder){
        
    }
}