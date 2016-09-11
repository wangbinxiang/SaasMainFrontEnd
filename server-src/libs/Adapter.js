export default class Adapter {
    constructor() {
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