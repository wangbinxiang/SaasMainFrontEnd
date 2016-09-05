import Router from 'koa-router';
import passport from 'koa-passport';
import { showSignUp, showSignIn, logIn} from '../../controllers/auth';

const router = Router();

//注册页面
router.get('/signup', async (ctx, next) => {
    console.log(Router.url('signup'));
    console.log('signStart');
    await next();
    console.log('signEnd');
}, showSignUp);

//注册
router.post('/signup', async (ctx, next) => {

});


//登陆页面
router.get('/signin', async (ctx, next) => {
    console.log(Router.url('signin'));
    console.log('signStart');
    await next();
    console.log('signEnd');
}, showSignIn);


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
router.post('/signin', 
    passport.authenticate('local', {
        failureRedirect: '/signin'
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