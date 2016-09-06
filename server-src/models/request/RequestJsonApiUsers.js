import { GET, POST, PUT, DEL } from '../../config/httpMethodConf';
import { userLoginIn } from '../../config/apiFeatureConf';
import RequestJsonApi from '../../libs/RequestJsonApi';
import SaasApiServiceLocation from '../apiServiceLocation/SaasApiServiceLocation';
/**
 * users接口 jsonapi 数据类
 */
export default class RequestJsonApiUsers {
    constructor(feature, originData) {
        this.feature = feature;
        this.host = SaasApiServiceLocation.get();
        this.originData = originData;
    }

    usersGet(ids = '') {
        let url = '/users';
        url = url + (ids? '/' + ids: '');
        //有ids 是获取指定id的用户信息，没有ids则获取用户信息列表
        this.url = url;
        return this;
    }

    usersSignUpPost() {
        let url = ''
        return this;
    }

    userLoginIn() {
        let url = '/users/signIn';
        this.url = url;

        this.method = POST;

        let attributes = {
            cellPhone: this.originData.cellPhone, 
            password: this.originData.password
        };

        this.buildData(attributes);

        return this;
    }

    usersUpdatePasswordPut() {

    }


    usersRestPasswordPut() {

    }

    buildData(attributes) {
        this.data = {
            data: {
                type: 'users',
                attributes: attributes
            }
        };
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

    buildFeature() {
        switch(this.feature) {
            case userLoginIn:
                this.userLoginIn();
                break;
            default:
                throw new Error('Invalid http method');
        }
    }

    buildRequest() {
        this.request = new RequestJsonApi(this.host, this.url, this.data);
    }
}

