export default class Adapter {
    constructor() {
    }

    async request() {
        let result = null;
        try {
            const { header, body } =  await this.requestObject.request();
            console.log(header.statusCode);
            console.log(body);
            if (header.statusCode === this.requestObject.successCode) {
                result = this.translator.toObject(body, this.activeClass);
                console.log(456);
            } else if (header.statusCode === this.requestObject.paramsErrorCode) {
                throw new Error(this.paramsErrorCode + 'Error params');
            } else {
                throw new Error('Invalid status');
            }
        } catch(err) {
            throw err;
        }
        return result;
    }

}