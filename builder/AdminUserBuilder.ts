import Builder from './Builder'
import User from './User'
import AdminUser from './AdminUser'
import AuthDTO from './models/AuthDTO'

export default class AdminUserBuilder implements Builder {
    private user:AdminUser;


    setBasicLoginInfo(name:string, password:string):void{

    }
    
    setBasicAuth(authDTO:AuthDTO):void{

    }

    setPermissionLevel(permissionLevel:number):void{

    }

    setAdminGroups(groups:Array<string>):void {
        this.user.adminGroups = groups.map(elem=>elem)
    }

    build():User{
        return this.user
    }
}