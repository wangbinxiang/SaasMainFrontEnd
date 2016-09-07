import moment from 'moment';
import { randomInt } from '../../libs/helper';
import verificationCodeNameList from '../../config/verificationCodeConf';
/**
 * 假发送手机验证码api
 * @type {Object}
 */
const sendPhone = {
    send: (phoneNum, code) => {}
}


export default class VerificationCode {
    constructor(phoneNum, codeName, store) {
        this.phoneNum  = phoneNum;
        this.codeName  = verificationCodeNameList[codeName];
        this.store     = store;
        this.timestamp =  moment().unix();
    }

    getData() {
        if (this.store[this.codeName]) {
            return this.store[this.codeName];
        };
        return null;
    }

    saveData(data) {
        console.log(data);
        this.store[this.codeName] = data;
    }


    /**
     * 发送验证码
     * @author wangbinxiang
     * @date   2016-09-07T14:06:00+0800
     * @return {[type]}                 [description]
     */
    send(interval = 60) {
        let data = this.getData();
        console.log(data);
        if (data) {
            //检查发送间隔是否未过60秒
            if (this.timestamp - data['timestamp'] <= interval) {
                return;
            };
        };

        //生成验证码
        const code = randomInt();

        //发送到手机
        sendPhone.send(this.phoneNum, code);

        const timestamp =  moment().unix();
        let phoneNum = this.phoneNum;
        
        data = { code, timestamp , phoneNum };

        //验证码写入store
        this.saveData(data);
        //
    }

    /**
     * 检查验证码
     * @author wangbinxiang
     * @date   2016-09-07T14:11:13+0800
     * @param  {[type]}                 code [description]
     * @return {[type]}                      [description]
     */
    check(code) {
        //从store获取验证码
        
        //没有验证码返回错误, 验证码超时返回错误
        
        //检查验证码是否和传入的code相同

        //返回结果

    }



}
