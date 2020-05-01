export default interface Observer {
    id:number
    chartValuesPercentage:Array<string>
    update(newValues:Array<string>):void
}