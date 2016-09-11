import Router from 'koa-router';
import passport from 'koa-passport';
import { showRegister, register, phoneNum, sendRegisterVerificationCode, showLogin, login, logout, showUpdatePassword, updatePassword } from '../../controllers/authenticate';
import { requiresLogin } from '../../middlewares/authorization';

const router = Router();

//注册页面
router.get('/register', showRegister);

//注册
router.post('/register', register);

router.get('/register/verification-code', sendRegisterVerificationCode);

//验证手机验证码
router.post('/register/phone-num', phoneNum);

//登陆页面
router.get('/login', showLogin);


//登陆
router.post('/login', 
    passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    login
);

//退出登录
router.get('/logout', logout);

router.get('/user/change-password', showUpdatePassword);

router.put('/user/change-password', updatePassword);


export default router;