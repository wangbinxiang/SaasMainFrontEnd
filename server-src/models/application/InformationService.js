import InformationAdapter from '../adapter/InformationAdapter';

//用户资料服务
export default class InformationService {
    constructor() {
        this.adapter = new InformationAdapter();
    }

    //资料申请审核
    apply({ id, title, contactPeople, contactPeoplePhone, contactPeopleQQ, province, city, address, identifyCardFrontPhoto, identifyCardBackPhoto, bankCardHolderName, bankCardNumber, bankCardCellphone, additionalInformation }, aApplicationClass) {

        return this.adapter.apply({ id, title, contactPeople, contactPeoplePhone, contactPeopleQQ, province, city, address, identifyCardFrontPhoto, identifyCardBackPhoto, bankCardHolderName, bankCardNumber, bankCardCellphone, additionalInformation }, aApplicationClass);
    }
}