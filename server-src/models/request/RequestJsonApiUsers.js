import RequestApi from '../../libs/RequestApi';
import { GET, POST, PUT } from '../../config/httpMethodConf';
import { USER_LOGIN, USER_SIGNUP, USER_UPDATE_PASSWORD, USER_REST_PASSWORD } from '../../config/apiFeatureConf';
import RequestJsonApi from '../../libs/RequestJsonApi';
import SaasApiServiceLocation from '../apiServiceLocation/SaasApiServiceLocation';
/**
 * users接口 jsonapi 数据类
 */
export default class RequestJsonApiUsers extends RequestApi {
    constructor(feature, originData) {
        // this.feature = feature;
        // this.host = SaasApiServiceLocation.get();
        // this.originData = originData;
        let host = SaasApiServiceLocation.get();
        super(host, feature, originData);
        this.dataType = 'users';
    }

    get(ids = '') {
        let url = '/users';
        url = url + (ids? '/' + ids: '');
        //有ids 是获取指定id的用户信息，没有ids则获取用户信息列表
        this.url = url;
        return this;
    }

    signup() {
        let url = '/users';
        this.url = url;

        this.method = POST;

        this.successCode = 201;
        this.paramsErrorCode = 409;

        let attributes = {
            cellPhone: this.originData.cellPhone, 
            password: this.originData.password
        };

        this.buildData(attributes);

    }

    login() {
        let url = '/users/signIn';
        this.url = url;

        this.method = POST;

        let attributes = {
            cellPhone: this.originData.cellPhone, 
            password: this.originData.password
        };

        this.buildData(attributes);
    }

    updatePassword() {
        let url = '/user/' + this.originData.uid + '/updatePassword';

        this.method = PUT;

        let attributes = {
            oldPassword: this.originData.oldPassword, 
            password: this.originData.password
        }

        this.buildData(attributes);
    }

    // usersRestPasswordPut() {

    // }

    buildFeature() {
        switch(this.feature) {
            case USER_LOGIN:
                this.login();
                break;
            case USER_SIGNUP:
                this.signup();
                break;
            case USER_UPDATE_PASSWORD:
                this.updatePassword();
            default:
                throw new Error('Invalid feature method');
        }
    }
}

