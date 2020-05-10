import User from './User'

export default class AdminUser implements User {
    name:string
    password:string
    age:number
    email:string
    permissionLevel: number
    adminGroups:Array<string>
}