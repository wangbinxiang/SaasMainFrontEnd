import RequestApi from '../../libs/RequestApi';
import SaasApiServiceLocation from '../apiServiceLocation/SaasApiServiceLocation';
import { INFORMATION_APPLY } from '../../config/apiFeatureConf';

export defalut class RequestJsonApiApplication extends RequestApi {
    constructor(feature, originData) {
        let host = SaasApiServiceLocation.get();
        super(host, feature, originData);
    }

    apply() {

    }

    buildFeature() {
        switch(this.feature) {
            case INFORMATION_APPLY:
                this.apply();
                break;
            default:
                throw new Error('Invalid http method');
        }
    }


}