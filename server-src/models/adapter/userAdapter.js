import RequestJsonApi from '../../libs/requestJsonApi';
// import apiServiceLocation from '../serviceLocation/apiServiceLocation';
class userAdapter {
    constructor() {

    }

    buidRequest(url, data) {
        // const url = getUrl();
        // const host = apiServiceLocation.getLocation();
        // const request = new RequestJsonApi(host);
        // this.request = request;
    }

    //验证用户 async函数
    verification() {
        return (async () => {
            const requestJsonApi = new RequestJsonApi('https://api.github.com');
            const { res, body } = await requestJsonApi.get('/');
            // console.log(body);
            return body;
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