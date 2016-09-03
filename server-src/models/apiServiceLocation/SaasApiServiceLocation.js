import ApiServiceLocation from '../../libs/ApiServiceLocation';
/**
 * mock数据服务地址类
 */
class SaasApiServiceLocation extends ApiServiceLocation {
    constructor(...args) {
        super(...args)
    }

    get(apiType) {
        apiType = apiType? apiType: 'saas';
        return super.get(apiType)
    }
}

export default new SaasApiServiceLocation();