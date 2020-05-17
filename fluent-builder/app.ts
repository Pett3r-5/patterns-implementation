import ClientUser from './models/ClientUser'
import ClientUserBuilder from './ClientUserBuilder'

const run = ():void => {
    const clientUser:ClientUser = new ClientUserBuilder().setBasicLoginInfo("user 1", "dsdsidsh").build()
    console.log(clientUser.age)
}

run()