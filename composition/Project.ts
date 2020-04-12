
export interface Project{
    readonly id:string;
    blueprint?:string
    fetchDocumentation(projectID: string): Array<any>
}