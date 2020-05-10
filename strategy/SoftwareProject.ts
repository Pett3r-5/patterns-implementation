import {Project} from './Project'

export class SoftwareProject implements Project {
    id: string
    blueprint:string
    
    public fetchDocumentation(projectId:string){
        //fetch from software collection
        //apply logic
        return ['aa', 'bb']
    }

}