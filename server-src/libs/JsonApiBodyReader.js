/**
 * json api body 读取数据类
 */
export default class JsonApiBodyReader {
    constructor(body) {
        this.data = body.data.attributes;
        this.data.id =  body.data.id;
    }

    value(key) {
        return this.data[key];
    }
}