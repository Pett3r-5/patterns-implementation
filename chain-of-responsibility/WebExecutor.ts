import Executor from './Executor'

export default class WebExecutor implements Executor {
    private executionType:string
    private nextExecutor:Executor 

    constructor(nextExecutor?:Executor){
        this.nextExecutor = nextExecutor
    }

    public getNext = ()=> this.nextExecutor

    execute(executionType:string, value:number):number{
        if(this.executionType === executionType) {
            return value * 10; //some specific implementation example
        }

        if(!this.nextExecutor) {
            return null;
        }
        
        return this.nextExecutor.execute(executionType, value);
    }
}