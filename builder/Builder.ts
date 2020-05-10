import User from './User'
import AuthDTO from './models/AuthDTO'

export default interface Builder {
    setBasicLoginInfo(name:string, password:string):void
    setBasicAuth(authDTO:AuthDTO):void
    setPermissionLevel(permissionLevel:number):void
    build():User
}