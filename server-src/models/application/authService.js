

//用户认证服务类
class authService {
    constructor(userAdapter) {
        this.userAdapter = new userAdapter();
    }

    //用户注册功能


    //用户登录功能
    login() {
        //用户适配器 
        return this.userAdapter.verification();
    }


    //获取用户
}

export default authService;