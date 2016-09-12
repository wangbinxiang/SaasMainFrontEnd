import Router from 'koa-router';
import multer from 'koa-multer';
import { showApplyForm, upload } from '../../controllers/information';

const router = Router();


router.get('/information/apply', showApplyForm);

router.post('/upload', multer({ dest: 'uploads/' }).any(), upload);

export default router;