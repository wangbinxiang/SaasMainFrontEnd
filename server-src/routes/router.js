import Router from 'koa-router';

//主页路由
import routerIndex from './router/index';
//登陆注册修改密码路由
import routerAuthhenticate from './router/authenticate';
//资料审核路由
import routerInformation from './router/information';


const router = new Router();

router.use('', routerIndex.routes());
router.use('', routerAuthhenticate.routes());
router.use('', routerInformation.routes());

export default router;