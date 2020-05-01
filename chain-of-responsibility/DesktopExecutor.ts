import Executor from './Executor'

export default class DesktopExecutor implements Executor {
    private executionType:string = "Desktop App"
    private nextExecutor:Executor 

    constructor(nextExecutor?:Executor){
        this.nextExecutor = nextExecutor
    }

    public getNext = ()=> this.nextExecutor

    execute(executionType:string, value:number):number | null{
        if(this.executionType === executionType) {
            return value + 5; //some specific implementation example
        }

        if(!this.nextExecutor) {
            return null;
        }

        return this.nextExecutor.execute(executionType, value);
    }
}