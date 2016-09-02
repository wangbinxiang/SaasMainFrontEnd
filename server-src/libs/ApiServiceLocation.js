import __instance from './singleton';
import config from 'config';
/**
 * api地址类
 */
class ApiServiceLocation {
    constructor(apiServiceLocation) {
        if (__instance()) {
            return __instance();
        };
        this.apiServiceLocation = config.get('apiServiceLocation.' + apiServiceLocation);
        __instance(this);
    }

    get() {
        return this.apiServiceLocation;
    }
}

export default ApiServiceLocation;