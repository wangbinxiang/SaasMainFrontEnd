import Router from 'koa-router';
import passport from 'koa-passport';
import { showRegister, register, showLogIn, logIn } from '../../controllers/auth';

const router = Router();

//注册页面
router.get('/register', async (ctx, next) => {
    console.log(Router.url('signup'));
    console.log('signStart');
    await next();
    console.log('signEnd');
}, showRegister);

//注册
router.post('/signup', async (ctx, next) => {

});


//登陆页面
router.get('/login', async (ctx, next) => {
    await next();
}, showLogIn);


//登陆
// router.post('/signin', async (ctx, next) => {
//     let middleware = passport.authenticate('local', async(user, info) => {
//         if (user === false) {
//             ctx.body = {
//                 'status' : 400
//             }
//         } else {
//             await ctx.login(user)
//             ctx.body = {
//                 user: user
//             }
//         }
//     })
//     await middleware.call(this, ctx, next)
// });
router.post('/login', 
    passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    logIn
);

//退出登录
router.get('signout', async (ctx, next) => {

});

// router.post('/custom', async (ctx, next) => {
//     return passport.authenticate('local', function(user, info, status) {
//         if (user === false) {
//             ctx.status = 401;
//             ctx.body = { success: false };
//         } else {
//             ctx.body = { success: true };
//             return ctx.login(user);
//         }
//     })(ctx, next);
// });
export default router;