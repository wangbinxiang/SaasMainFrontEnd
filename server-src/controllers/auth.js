export async function showSignUp(ctx, next) {

    const title = '注册';
    const pageJs = webpackIsomorphicTools.assets().javascript.app;
    // ctx.cookies.set('test', 'signUp');
    // ctx.cookies.set('test2', 'signUp2');

    await ctx.render('auth/signup', {
        title, pageJs
    });
}

export async function signUp(ctx, next) {
    
}

export async function showSignIn(ctx, next) {

    const title = '登录';

    const pageJs = webpackIsomorphicTools.assets().javascript.app;
    // ctx.cookies.set('test', 'signUp');
    // ctx.cookies.set('test2', 'signUp2');

    await ctx.render('auth/signin', {
        title, pageJs
    });
}

export async function logIn(ctx, next) {

    const title = '登陆';
    let info = '登陆成功';

    await ctx.render('common/info', {
        title, info
    });
}