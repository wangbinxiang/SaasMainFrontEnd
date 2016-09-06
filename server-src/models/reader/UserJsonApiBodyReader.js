export default class UserJsonApiBodyReader {
    constructor(body) {
        this.data = body.data.attributes;
        this.data.id =  body.data.id;
    }

    value(key) {
        return this.data[key];
    }
}