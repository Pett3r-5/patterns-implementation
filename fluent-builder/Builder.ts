import AuthDTO from './models/AuthDTO'

export default interface Builder {
    setBasicLoginInfo(name:string, password:string):Builder
    setBasicAuth(authDTO:AuthDTO):Builder
    setPermissionLevel(permissionLevel:number):Builder
}