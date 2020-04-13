import { ExternalRequest } from "./ExternalRequest";

//mocked external library or legacy code that must be adapted to
export class ExternalService {
    private externalRequest:ExternalRequest

    constructor(externalRequest:ExternalRequest) {
        this.externalRequest = externalRequest
    }

    public requestProductTypes():boolean{
        const route:string = this.externalRequest.getRoute();
        //mocked fetching products
        //request.get(baseUrl, route)
        return true;
    }
}