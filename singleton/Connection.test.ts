import {Connection} from './Connection'

const testConnectionSingleton = () => {
    const connection = Connection;
    connection.getConnectionInstance();
}