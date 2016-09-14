import request from 'request-json';
import Promise from 'bluebird';

/**
 * jsonApi promise 请求类
 * @author 王斌翔
 */
class RequestJsonApi {
    constructor(host, url, data) {
        //初始化请求地址
        this.client = request.createClient(host);
        this.url = url;
        this.data = data;
    }

    promiseThunk(resolve, reject) {
        return (err, header, body) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    header,
                    body
                });
            }
        }
    }

    promise(func) {
        return new Promise(func);
    }

    get() {
        const that = this;
        return this.promise((resolve, reject) => {
            that.client.get(that.url, (err, header, body) => {
                console.log(123);
                console.log(typeof body);
                if (err) {
                    reject(err);
                } else {
                    body = JSON.parse(body);
                    resolve({
                        header,
                        body
                    });
                }
            });
        });
    }

    post() {
        const that = this;
        return this.promise((resolve, reject) => {
            console.log(this.data);
            that.client.post(that.url, that.data, that.promiseThunk(resolve, reject));
        });
    }

    put() {
        const that = this;
        return this.promise((resolve, reject) => {
            that.client.put(that.url, that.data, that.promiseThunk(resolve, reject));
        });
    }

    del() {
        const that = this;
        return this.promise((resolve, reject) => {
            that.client.del(that.url, that.data, that.promiseThunk(resolve, reject));
        });
    }

    sendFile() {
        const that = this;
        return this.promise((resolve, reject) => {
            that.client.sendFile(that.url, that.data.path, that.data.name, (err, header, body) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(body);
                    body = JSON.parse(JSON.parse(body));
                    resolve({
                        header,
                        body
                    });
                }
            });
        });
    }
}

export default RequestJsonApi;