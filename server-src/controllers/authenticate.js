import AuthenticateService from '../models/application/AuthenticateService';
import VerificationCodeService from '../models/application/VerificationCodeService';
import User from '../models/model/User';
import moment from 'moment';

export async function showRegister(ctx, next) {
    const title = '注册';
    const pageJs = webpackIsomorphicTools.assets().javascript.auth;
    // ctx.cookies.set('test', 'signUp');
    // ctx.cookies.set('test2', 'signUp2');


    await ctx.render('authhenticate/register', {
        title, pageJs
    });
}

export async function register(ctx, next) {

    let cellPhone  = ctx.request.body.cellPhone;
    let password   = ctx.request.body.password;
    let rePassword = ctx.request.body.rePassword;

    const authenticateService = new AuthenticateService();
    const user = await authenticateService.register(cellPhone, password, User);

    if (!user) {
        ctx.redirect('/register');
    }
    let title    = '注册成功';
    let info     = '注册成功，请登录。';
    let location = '/login';
    await ctx.render('common/info', {
        title, info, location
    });
}

export async function sendRegisterVerificationCode(ctx, next) {
    let cellPhone  = ctx.query.cellPhone;

    const verificationCodeService = new VerificationCodeService(ctx.session);
    verificationCodeService.sendRegister(cellPhone);


    // console.log(moment().unix());
    //检查session是否发送
    // let high = 999999;
    // let low = 100000;
    // let code = Math.floor(Math.random() * (high - low + 1) + low);
    // console.log(code);
    //检查手机号是否正确
    //生成验证码
    //发送验证码
    //返回信息
    ctx.body = { success: true };
}

export async function phoneNum(ctx, next) {

    let cellPhone  = ctx.request.body.cellPhone;
    console.log(cellPhone);
    //生成验证码
        
    //检查验证时间
    //一分钟之后才可再次验证
    // ctx.session.registerVerificationTime = '';

    ctx.body = { success: true };
    //发送验证码
    
    //返回发送成功
}

export async function showLogIn(ctx, next) {
    if (ctx.header.referer) {
        ctx.session.returnTo = ctx.header.referer;
    };
    const title = '登录';

    const pageJs = webpackIsomorphicTools.assets().javascript.auth;
    // ctx.cookies.set('test', 'signUp');
    // ctx.cookies.set('test2', 'signUp2');

    await ctx.render('authhenticate/login', {
        title, pageJs
    });
}

export async function logIn(ctx, next) {

    const title = '登陆';
    let info = '登陆成功';

    let redirectTo = ctx.session.returnTo? ctx.session.returnTo: '/';

    ctx.redirect(redirectTo);

    // await ctx.render('common/info', {
    //     title, info, redirectTo
    // });
}

export async function logOut(ctx, next) {
    ctx.logout()
    ctx.redirect('/')
}