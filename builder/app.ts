import ClientUserBuilder from './ClientUserBuilder'
import AdminUserBuilder from './AdminUserBuilder'
import ClientUser from './ClientUser'
import AdminUser from './AdminUser'
import Director from './Director'

const run = ():void =>{
    const adminUserBuilder:AdminUserBuilder= new AdminUserBuilder()
    adminUserBuilder.setBasicLoginInfo("mary", "sdaasdsa")
    adminUserBuilder.setAdminGroups(["accounting", "development"])
    const adminUser:AdminUser = adminUserBuilder.build()
    
    const clientUserBuilder:ClientUserBuilder= new ClientUserBuilder()
    const director:Director = new Director()
    director.buildClientUser(clientUserBuilder)
    const clientUser:ClientUser = clientUserBuilder.build()
}

run()