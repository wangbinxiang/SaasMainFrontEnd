import Router from 'koa-router';
import { showApplyForm } from '../../controllers/information';

const router = Router();


router.get('/information/apply', showApplyForm);

export default router;