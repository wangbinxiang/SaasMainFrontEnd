import Router from 'koa-router';
import { showAuditForm } from '../../controllers/information';

const router = Router();


router.get('/information/audit-form', showAuditForm);

export default router;