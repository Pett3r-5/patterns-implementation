import {APIMockConnection} from './APIMockConnection'

export class Connection {
    private static readonly connectionInstance = new APIMockConnection('https://mocked-url.com')
    private constructor(){}

    public static getConnectionInstance():APIMockConnection {
        return this.connectionInstance;
    }
}
