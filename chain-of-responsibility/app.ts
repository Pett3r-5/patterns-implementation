import DesktopExecutor from './DesktopExecutor'
import WebExecutor from './WebExecutor'
import MobileExecutor from './MobileExecutor'

//like an Observer pattern, except here you are able to mantain a priority order
const init = ():void => {
    
    const mobileExecutor:MobileExecutor = new MobileExecutor()
    const webExecutor:WebExecutor = new WebExecutor(mobileExecutor)
    const desktopExecutor:DesktopExecutor = new DesktopExecutor(webExecutor)
    desktopExecutor.execute("Mobile app", 5);
}

init()
