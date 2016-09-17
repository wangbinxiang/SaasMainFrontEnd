import Adapter from '../../libs/Adapter';

export class SmsAdapter extends Adapter {
    constructor() {
        super();
        this.translator = new UserTranslator();
    }

    buildRequest(apiFeature, data) {
        this.requestObject = new AuthenticateRequestJsonApi(apiFeature, data);
    }


    register(cellphone, message) {

    }

    resetPassword(cellphone, message) {
        
    }

}