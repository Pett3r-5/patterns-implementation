import BarChartObserver from './BarChartObserver'
import PieChartObserver from './PieChartObserver'
import ClientChartIO from './ClientChartIO'
import Emitter from './Emitter'

const run = ():void=>{
    const chartIO:ClientChartIO = new ClientChartIO(new Emitter(["charts"]));
    chartIO.getEmitter().subscribeObserver("charts", new BarChartObserver());
    chartIO.getEmitter().subscribeObserver("charts", new PieChartObserver());
    chartIO.fetch()
}

run()