export async function showRegister(ctx, next) {

    const title = '注册';
    const pageJs = webpackIsomorphicTools.assets().javascript.auth;
    // ctx.cookies.set('test', 'signUp');
    // ctx.cookies.set('test2', 'signUp2');

    await ctx.render('auth/register', {
        title, pageJs
    });
}

export async function register(ctx, next) {
    
}

export async function showLogIn(ctx, next) {
    if (ctx.header.referer) {
        ctx.session.returnTo = ctx.header.referer;
    };
    const title = '登录';

    const pageJs = webpackIsomorphicTools.assets().javascript.auth;
    // ctx.cookies.set('test', 'signUp');
    // ctx.cookies.set('test2', 'signUp2');

    await ctx.render('auth/login', {
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