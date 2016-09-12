import config from 'config';

function prefixApiServiceLocation() {
    return 'apiServiceLocation.';
}

function getServiceLcation(serviceName) {
    let serviceLocation = prefixApiServiceLocation() + serviceName;
    return config.get(serviceLocation);
}

/**
 * saas微服务地址
 * @author wangbinxiang
 * @date   2016-09-12T20:35:12+0800
 * @return {[type]}                 [description]
 */
export function saasApiServiceLocation() {
    const saas = 'saas';
    return getServiceLcation(saas);
}

/**
 * attachment微服务地址
 * @author wangbinxiang
 * @date   2016-09-12T20:35:22+0800
 * @return {[type]}                 [description]
 */
export function attachmentApiServiceLocation() {
    const attachmentLocation = 'attachment';
    return getServiceLcation(attachmentLocation);
}

