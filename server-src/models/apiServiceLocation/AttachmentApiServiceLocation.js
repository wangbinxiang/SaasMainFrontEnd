import ApiServiceLocation from '../../libs/ApiServiceLocation';
/**
 * 数据服务地址类
 */
class AttachmentApiServiceLocation extends ApiServiceLocation {
    constructor(...args) {
        super(...args)
        this.microServiceName = 'attachment';
    }
}

export default new AttachmentApiServiceLocation();