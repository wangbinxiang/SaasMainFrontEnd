import RequestJsonApi from '../../libs/RequestJsonApi';
import SaasApiServiceLocation from '../apiServiceLocation/SaasApiServiceLocation';

class userAdapter {
    constructor(request) {
        this.request = RequestJsonApi;
    }

    buidRequest(host, url, data) {
        return new this.request(host, url, data);
    }

    //验证用户 async函数
    verification(passport, password, aUserClass) {
        const host = SaasApiServiceLocation.get();
        const url = '/user/signin';
        let data = {
            data: {
                type: 'users',
                attributes: { 
                    cellPhone: passport, 
                    password: password
                }
            }
        };
        data = {
            username: passport,
            password: password
        }
        const request = this.buidRequest(host, url, data);

        return (async () => {
            let user = null;
            try {
                const { header, body } = await request.post();

                if (header.statusCode == 200) {
                    user = new userTranslator().toUserFromJsonApiBody(body, aUserClass);
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