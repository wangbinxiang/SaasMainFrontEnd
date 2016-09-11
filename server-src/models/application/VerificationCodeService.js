import VerificationCode from '../model/VerificationCode';
import { REGISTER_CODE } from '../../config/verificationCodeConf';

export default class VerificationCodeService {
    constructor(store) {
        this.store = store;
    }

    buildVerificationCode(phoneNum, codeName){
        return new VerificationCode(phoneNum, codeName, this.store);
    }

    //注册发送验证码
    sendRegister(phoneNum) {
        const verificationCode = this.buildVerificationCode(phoneNum, REGISTER_CODE);
        return verificationCode.send(1);
    }

    //注册验证验证码
    checkRegister() {

    }

}

    //发送验证码 手机号 验证码名称
    
    

