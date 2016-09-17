export default class Adapter {
    async request() {
        let result = null;
        try {
            const { header, body } = await this.requestObject.request();
            if (header.statusCode === this.requestObject.getSuccessCode()) {
                result = this.translator.toObject(body, this.activeClass);
            } else if (header.statusCode === this.requestObject.getParamsErrorCode()) {
                throw new Error('Error params');
            } else {
                throw new Error('Invalid status');
            }
        } catch(err) {
            throw err;
        }
        return result;
    }

}