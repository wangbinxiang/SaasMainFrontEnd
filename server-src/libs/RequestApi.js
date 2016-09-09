import RequestJsonApi from './RequestJsonApi';

export default class RequestApi {
    constructor(host, feature, originData) {
        this.host       = host;
        this.feature    = feature;
        this.originData = originData;
    }

    buildData(type, attributes) {
        this.data = {
            data: {
                type: type,
                attributes: attributes
            }
        };
    }

    buildData() {

    }

    buildFeature() {

    }

    buildRequest() {
        this.request = new RequestJsonApi(this.host, this.url, this.data);
    }

    

    request() {
        this.buildFeature();
        this.buildRequest();
        switch(this.method) {
            case GET:
                return this.request.get();
                break;
            case POST:
                return this.request.post();
                break;
            case PUT:
                return this.request.put();
                break;
            case DEL:
                return this.request.del();
                break;
            default:
                throw new Error('Invalid http method');
        }
    }

}