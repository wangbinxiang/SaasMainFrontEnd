import ApiServiceLocation from '../../libs/ApiServiceLocation';
/**
 * 数据服务地址类
 */
class SaasApiServiceLocation extends ApiServiceLocation {
    constructor(...args) {
        super(...args)
        this.microServiceName = 'saas';
    }
}

export default new SaasApiServiceLocation();