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
        this.apiServiceLocation = apiServiceLocation? apiServiceLocation: 'apiServiceLocation.';
        __instance(this);
    }

    get() {
        const configLocation = this.apiServiceLocation + this.microServiceName;
        if (config.has(configLocation)) {
            return config.get(configLocation)
        } else {
            throw new Error('config not exsits, config location is ' + configLocation);
        }
        config.get(saasApiServiceLocation);
        return this.apiServiceLocation;
    }
}
export default ApiServiceLocation;


// const apiServiceLocation = 'apiServiceLocation';
// const saasApiServiceLocation = apiServiceLocation + '.saas';
// export function getSaasApiServiceLocation () {
//     return config.get(saasApiServiceLocation);
// }