/**
 * json api body 读取数据类
 */
export default class JsonApiBodyReader {
    constructor(body) {
        console.log(typeof body);
        // this.data = body.data.attributes;
        // this.data.id =  body.data.id;
    }

    value(key) {
        return '';
        return this.data[key];
    }
}