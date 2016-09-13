/**
 * json api body 读取数据类
 */
export default class JsonApiBodyReader {
    constructor(body) {
        this.data = body.attributes;
        this.data.id =  body.id;
    }

    value(key) {
        return this.data[key];
    }
}