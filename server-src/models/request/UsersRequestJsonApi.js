import BaseRequest from '../../libs/BaseRequest';
import { GET, POST, PUT } from '../../config/httpMethodConf';
import { USER_LOGIN, USER_SIGNUP, USER_UPDATE_PASSWORD, USER_REST_PASSWORD } from '../../config/apiFeatureConf';
import { saasApiServiceLocation } from '../../libs/ApiServiceLocation';
/**
 * users接口 jsonapi 数据类
 */
export default class UsersRequestJsonApi extends BaseRequest {
    constructor(feature, originData) {
        const host = saasApiServiceLocation();
        super(host, feature, originData);
        this.dataType = 'users';
    }

    get(ids = '') {
        let url = '/users';
        url = url + (ids? '/' + ids: '');
        //有ids 是获取指定id的用户信息，没有ids则获取用户信息列表
        this.url = url;
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
                break;
            default:
                throw new Error('Invalid feature method');
        }
    }
}

