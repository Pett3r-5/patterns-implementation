import Builder from './Builder'
import User from './User'
import AdminUser from './AdminUser'
import AuthDTO from './models/AuthDTO'

export default class AdminUserBuilder implements Builder {
    private user:AdminUser;


    setBasicLoginInfo(name:string, password:string):void{
        this.user.name = name
        this.user.password = password
    }
    
    setBasicAuth(authDTO:AuthDTO):void{
        this.user.email = authDTO.email
        this.user.permissionLevel = authDTO.permissionLevel
    }

    setPermissionLevel(permissionLevel:number):void{
        this.user.permissionLevel = permissionLevel
    }

    setAdminGroups(groups:Array<string>):void {
        this.user.adminGroups = groups.map(elem=>elem)
    }

    build():AdminUser{
        return this.user
    }
}