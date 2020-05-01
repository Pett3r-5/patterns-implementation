export default interface Executor {
    execute(executionType:string, value:number):number | null
    getNext():Executor
}