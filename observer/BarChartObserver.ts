import Observer from './Observer'

export default class BarChartObserver implements Observer {
    id:number
    chartValuesPercentage:Array<string>;

    update(newValue:Array<string>):void{
        //specifice bar implementation
        this.chartValuesPercentage = newValue
        console.log(`barPercentage value: ${this.chartValuesPercentage[0]}`)
    }
}