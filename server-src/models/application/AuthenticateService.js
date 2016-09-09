import UserAdapter from '../adapter/UserAdapter';

//用户认证服务类
export default class AuthenticateService {
    constructor() {
        this.userAdapter = new UserAdapter();
    }

    //用户注册功能
    register(passport, password, aUserClass) {
        return this.userAdapter.signup(passport, password, aUserClass);
    }

    //用户登录功能
    login(passport, password, aUserClass) {
        //用户适配器 
        return this.userAdapter.verification(passport, password, aUserClass);
    }

    updatePassword(uid, oldPassword, password, aUserClass) {
        return this.userAdapter.updatePassword(uid, oldPassword, password, aUserClass);
    }

    //获取用户
}
