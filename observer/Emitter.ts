import Observer from './Observer'
import ObserverType from './ObserverType'

export default class Emitter {
    observers: ObserverType

    constructor(ObserverTypes:Array<string>){
        ObserverTypes.forEach(eventType=>{
            this.observers = {"charts": [], ...this.observers}
        })
    }

    subscribeObserver(observerType:string, observer:Observer):void{
        this.observers[observerType]?.push(observer)
    }

    unsubscribeObserver(observerType:string, observer:Observer):void{
        const listeners:Array<Observer> = this.observers[observerType]
        if(!!listeners){
            this.observers[observerType] = listeners.filter(element=>element.id!==observer.id)
        }
    }

    notify(observerType:string, event:Array<string>):void{
        this.observers[observerType]?.forEach(each=>each.update(event))
    }
}