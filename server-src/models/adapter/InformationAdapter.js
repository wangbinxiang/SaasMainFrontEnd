import Adapter from '../../libs/Adapter';
import ApplicationRequestJsonApi from '../request/ApplicationRequestJsonApi';
import InformationTranslator from '../translator/InformationTranslator';
import { INFORMATION_APPLY } from '../../config/apiFeatureConf';


export default class InformationAdapter extends Adapter {
    constructor() {
        super();
        this.translator = new InformationTranslator();
    }

    buildRequest(apiFeature, data) {
        this.requestObject = new ApplicationRequestJsonApi(apiFeature, data);
    }

    apply({ id, title, contactPeople, contactPeoplePhone, contactPeopleQQ, province, city, address, identifyCardFrontPhoto, identifyCardBackPhoto, bankCardHolderName, bankCardNumber, bankCardCellphone, additionalInformation }, aInformationClass) {
        

        this.buildRequest(
            INFORMATION_APPLY,
            { id, title, contactPeople, contactPeoplePhone, contactPeopleQQ, province, city, address, identifyCardFrontPhoto, identifyCardBackPhoto, bankCardHolderName, bankCardNumber, bankCardCellphone, additionalInformation }
        );

        this.activeClass = aInformationClass;

        return this.request();
    }   
}