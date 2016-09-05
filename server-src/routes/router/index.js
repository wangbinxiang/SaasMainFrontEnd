import Router from 'koa-router';
import index from '../../controllers/index';

const router = Router()

router.get('/', async (ctx, next) => {
    await next();
}, async (ctx, next) => {
    await next();
},  index);

export default router
