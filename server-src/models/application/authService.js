import UserAdapter, { verification } from '../adapter/userAdapter';
import constitute from 'constitute'

//用户认证服务类
class authService {
    constructor() {
        this.userAdapter = constitute(UserAdapter);
    }

    //用户注册功能


    //用户登录功能
    login(passport, password, aUserClass) {
        //用户适配器 
        return this.userAdapter.verification(passport, password, aUserClass);
    }


    //获取用户
}

export default authService;