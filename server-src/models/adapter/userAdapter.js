import Adapter from '../../libs/Adapter';
import UserTranslator from '../translator/UserTranslator';
import UsersRequestJsonApi from '../request/UsersRequestJsonApi';
import { USER_LOGIN, USER_SIGNUP, USER_UPDATE_PASSWORD, USER_REST_PASSWORD } from '../../config/apiFeatureConf';

export default class UserAdapter extends Adapter {
    constructor() {
        super();
        this.translator = new UserTranslator();
    }

    buildRequest(apiFeature, data) {
        this.requestObject = new UsersRequestJsonApi(apiFeature, data);
    }

    signup(passport, password, aUserClass) {
        this.buildRequest(USER_SIGNUP, { 
            cellPhone: passport,
            password: password
        });

        this.activeClass = aUserClass;

        return this.request();
    }

    //验证用户 async函数
    verification(passport, password, aUserClass) {
        this.buildRequest(USER_LOGIN, { 
            cellPhone: passport,
            password: password
        });

        this.activeClass = aUserClass;

        return this.request();
    }



    updatePassword(uid, oldPassword, password, aUserClass) {
        this.buildRequest(USER_UPDATE_PASSWORD, { 
            uid: uid,
            oldPassword: oldPassword,
            password: password
        });

        this.activeClass = aUserClass;

        return this.request();
    }
}