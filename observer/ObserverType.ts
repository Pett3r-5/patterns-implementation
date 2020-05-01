import Observer from './Observer'

export default interface ObserverType {
    [key: string]:Array<Observer>
}