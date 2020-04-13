import { ClientRequest } from "./internalClient/ClientRequest"
import { ClientRequestAdapter } from "./ClientRequestAdapter"
import { ExternalService } from "./externanlService/ExternalService";

const test = ()=> {
    const clientRequest:ClientRequest = new ClientRequest()

    const clientRequestAdapter:ClientRequestAdapter = new ClientRequestAdapter(clientRequest);
    const externalService:ExternalService = new ExternalService(clientRequestAdapter);
}
