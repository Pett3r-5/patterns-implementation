import Emitter from './Emitter'

export default class ClientChartIO {
    private emitter:Emitter;

    constructor(emitter:Emitter){
        this.emitter = emitter;
    }

    getEmitter():Emitter{
        return this.emitter;
    }

    fetch():void{
        //mocked database fetch
        const APIMock:Array<string> = ["5%", "21%", "75%", "6%"];
        this.emitter.notify("charts", APIMock);
    }
}