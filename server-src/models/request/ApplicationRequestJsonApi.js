import BaseRequest from '../../libs/BaseRequest';
import { GET, POST, PUT, DEL } from '../../config/httpMethodConf';
import SaasApiServiceLocation from '../apiServiceLocation/SaasApiServiceLocation';
import { INFORMATION_APPLY } from '../../config/apiFeatureConf';

export default class ApplicationRequestJsonApi extends BaseRequest {
    constructor(feature, originData) {
        const host = SaasApiServiceLocation.get();
        super(host, feature, originData);
        this.dataType = 'applications';
    }

    apply() {
        let url = '/applications';
        this.url = url;

        this.method = POST;

        let attributes = {
            id: originData.id,
            title: originData.title,
            contactPeople: originData.contactPeople,
            contactPeoplePhone: originData.contactPeoplePhone,
            contactPeopleQQ: originData.contactPeopleQQ,
            province: originData.province,
            city: originData.city,
            address: originData.address,
            identifyCardFrontPhoto: originData.identifyCardFrontPhoto,
            identifyCardBackPhoto: originData.identifyCardBackPhoto,
            bankCardHolderName: originData.bankCardHolderName,
            bankCardNumber: originData.bankCardNumber,
            bankCardCellphone: originData.bankCardCellphone,
            additionalInformation: originData.additionalInformation,
        }

        this.successCode = 201;
        this.paramsErrorCode = 409;

        this.buildData(attributes);
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