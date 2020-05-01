import Observer from './Observer'

export default class PieChartObserver implements Observer {
    id:number
    chartValuesPercentage:Array<string>;

    update(newValues:Array<string>):void{
        //specifice pie implementation
        this.chartValuesPercentage = newValues
        console.log(`piePercentage value: ${this.chartValuesPercentage[0]}`)
    }
}