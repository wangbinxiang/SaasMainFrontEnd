import RequestJsonApi from '../../libs/RequestJsonApi';
import SaasApiServiceLocation from '../apiServiceLocation/SaasApiServiceLocation';
import UserTranslator from '../translator/UserTranslator';
import RequestJsonApiUsers from '../request/RequestJsonApiUsers';
import { USER_LOGIN, USER_SIGNUP, USER_UPDATE_PASSWORD, USER_REST_PASSWORD } from '../../config/apiFeatureConf';

export default class UserAdapter {
    constructor() {
        this.translator = new UserTranslator();
    }

    signup(passport, password, aUserClass) {
        //初始化request
        // const requestJsonApiUsers = new RequestJsonApiUsers(USER_SIGNUP, { cellPhone: passport,
        //     password: password
        // });

        this.requestObject = new RequestJsonApiUsers(USER_SIGNUP, { 
            cellPhone: passport,
            password: password
        });

        this.activeClass = aUserClass;

        return this.request();

        // return (async () => {
        //     let user = null;
        //     try {
        //         //获取response
        //         const { header, body } = await requestJsonApiUsers.request();
        //         if (header.statusCode === 201) {
        //             user = new UserTranslator().toUserFromJsonApiBody(body, aUserClass);
        //         } else if (header.statusCode === 409) {
        //             throw new Error('409 Error params');
        //         } else {
        //             throw new Error('Invalid status');
        //         }
        //     } catch(err) {
        //         throw err;
        //     }
        //     return user;
        // })();
    }

    //验证用户 async函数
    verification(passport, password, aUserClass) {
        //获取地址和数据的方法分离。
        // 1 设置地址， 2设置数据
        // const request = this.buidJsonApiRequest(host, url, data);

        this.requestObject = new RequestJsonApiUsers(USER_LOGIN, { 
            cellPhone: passport,
            password: password
        });

        this.activeClass = aUserClass;


        return this.request();

        // return (async () => {
        //     let user = null;
        //     try {
        //         const { header, body } = await requestJsonApiUsers.request();
        //         if (header.statusCode === 200) {
        //             user = new UserTranslator().toUserFromJsonApiBody(body, aUserClass);
        //         } else if (header.statusCode === 404) {
        //             throw new Error('404 Error params');
        //         } else {
        //             throw new Error('Invalid status');
        //         }
        //     } catch(err) {
        //         throw err;
        //     }
        //     return user;
        // })();
    }



    updatePassword(uid, oldPassword, password, aUserClass) {
        this.requestObject = new RequestJsonApiUsers(USER_UPDATE_PASSWORD, { 
            uid: uid,
            oldPassword: oldPassword,
            password: password
        });
        this.activeClass = aUserClass;

        return this.request();

        // return (async () => {
        //     let user = null;
        //     try {
        //         const { header, body } = await requestJsonApiUsers.request();
        //         if (header.statusCode === 200) {
        //             user = new UserTranslator().toUserFromJsonApiBody(body, aUserClass);
        //         } else if (header.statusCode === 404) {
        //             throw new Error('404 Error params');
        //         } else {
        //             throw new Error('Invalid status');
        //         }
        //     } catch(err) {
        //         throw err;
        //     }
        //     return user;
        // })();
    }


    request() {
        const that = this;
        return (async () => {
            let result = null;
            try {
                const { header, body } =  await that.requestObject.request();
                if (header.statusCode === that.requestObject.successCode) {
                    result = that.translator.toObject(body, that.activeClass);
                } else if (header.statusCode === that.requestObject.paramsErrorCode) {
                    throw new Error(that.paramsErrorCode + 'Error params');
                } else {
                    throw new Error('Invalid status');
                }
            } catch(err) {
                throw err;
            }
            return result;
        })();
    }
}