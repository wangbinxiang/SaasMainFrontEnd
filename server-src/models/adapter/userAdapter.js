import RequestJsonApi from '../../libs/RequestJsonApi';
import SaasApiServiceLocation from '../apiServiceLocation/SaasApiServiceLocation';
import userTranslator from '../translator/userTranslator';
import RequestJsonApiUsers from '../request/RequestJsonApiUsers';
import { userLoginIn } from '../../config/apiFeatureConf';

class userAdapter {
    constructor() {
    }

    buidJsonApiRequest(host, url, data) {
        return new RequestJsonApi(host, url, data);
    }

    //验证用户 async函数
    verification(passport, password, aUserClass) {
        // const host = SaasApiServiceLocation.get();
        // const url = '/users/signIn';
        // let data = {
        //     data: {
        //         type: 'users',
        //         attributes: {
        //             cellPhone: passport, 
        //             password: password
        //         }
        //     }
        // };
        // data = {
        //     username: passport,
        //     password: password
        // }
        

        //获取地址和数据的方法分离。
        // 1 设置地址， 2设置数据
        // const request = this.buidJsonApiRequest(host, url, data);

        const requestJsonApiUsers = new RequestJsonApiUsers(userLoginIn, { cellPhone: passport,
            password: password
        });

        return (async () => {
            let user = null;
            try {

                const { header, body } = await requestJsonApiUsers.request();
                // const { header, body } = await request.post();

                if (header.statusCode === 200) {
                    user = new userTranslator().toUserFromJsonApiBody(body, aUserClass);

                } else if (header.statusCode === 404) {
                    throw new Error('404 Error params');
                } else {
                    throw new Error('Invalid status');
                }
            } catch(err) {
                throw err;
            }
            return user;
        })();
        //获取request请求类 promise
        // const requestJsonApi = new RequestJsonApi('https://api.github.com');
        // (async () => {
        //     const { res, body } = await requestJsonApi.get('/');
        //     console.log(body)
        // })();
        //request请求数据
        
        //判断请求结果是否是 200
        
        //userMockTranslator转换类转换 response 成为 user对象
    }

    //获取用户信息
}

export default userAdapter;

export async function verification() {
    const requestJsonApi = new RequestJsonApi('https://api.github.com');
    const { res, body } = await requestJsonApi.get('/');
    console.log(body);
    return body;
}