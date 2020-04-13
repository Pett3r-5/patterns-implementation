import { ExternalRequest } from "./externanlService/ExternalRequest";
import { ClientRequest } from "./internalClient/ClientRequest";

export class ClientRequestAdapter extends ExternalRequest {
    private clientRequest:ClientRequest;

    constructor(clientRequest:ClientRequest){
        super()
        this.clientRequest = clientRequest;
    }

    getRoute():string {
        const url:Array<string> = this.clientRequest.getUrl()?.split('/')
        const uri:string = url[url.length -1]
        return uri;
    }
} 