import {Project} from './Project'

export class HardwareProject implements Project {
    id: string
    blueprint:string
    
    public fetchDocumentation(projectId:string){
        //fetch from hardware collection
        //apply logic
        return ['aa', 'bb']
    }

}