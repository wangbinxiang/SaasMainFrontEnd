import RequestJsonApiApplication from '../request/RequestJsonApiApplication';
import { INFORMATION_APPLY } from '../../config/apiFeatureConf';
import InformationTranslator from '../translator/InformationTranslator';

export default class InformationAdapter {
    constructor() {
    }

    apply({ id, title, contactPeople, contactPeoplePhone, contactPeopleQQ, province, city, address, identifyCardFrontPhoto, identifyCardBackPhoto, bankCardHolderName, bankCardNumber, bankCardCellphone, additionalInformation }, aInformationClass) {
        

        const requestJsonApiApplication = new RequestJsonApiApplication(
            INFORMATION_APPLY,
            { id, title, contactPeople, contactPeoplePhone, contactPeopleQQ, province, city, address, identifyCardFrontPhoto, identifyCardBackPhoto, bankCardHolderName, bankCardNumber, bankCardCellphone, additionalInformation }
        );

        return (async () => {
            let information = null;
            try {
                //获取response
                const { header, body } = await requestJsonApiApplication.request();
                if (header.statusCode === 201) {
                    information = new InformationTranslator().toInformationFromJsonApiBody(body, aInformationClass);
                } else if (header.statusCode === 409) {
                    throw new Error('409 Error params');
                } else {
                    throw new Error('Invalid status');
                }
            } catch(err) {
                throw err;
            }
            return information;
        })();
    }   
}