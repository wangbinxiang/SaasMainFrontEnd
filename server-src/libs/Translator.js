export default class Translator {
    constructor() {
    }

    newObject(params) {
        return new this.activeClass(params);
    }

    //翻译users信息
    toObject(body, aActiveClass) {
        this.activeClass = aActiveClass;
        console.log(body);
        console.log(typeof body.data.length);
        if (body.data.length) {
            let result = [];
            for(let data of body.data) {
                let obj = this.createObject(data);
                result.push(obj);
            }
            return result;
        } else {
            return this.createObject(body.data);
        }
    }


    /**
     * 创建对象
     * @author wangbinxiang
     * @date   2016-09-13T14:58:34+0800
     * @param  {[type]}                 data [description]
     * @return {[type]}                      [description]
     */
    createObject(data) {
        let param = this.readData(data);
        return this.newObject(param);
    }



    /**
     * 子类需要实现该方法读取数据
     * @author wangbinxiang
     * @date   2016-09-13T14:36:17+0800
     * @param  {[type]}                 data [description]
     * @return {[type]}                      [description]
     */
    readData(data){}
}