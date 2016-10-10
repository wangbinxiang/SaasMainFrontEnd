import Router from 'koa-router';
import multer from 'koa-multer';
import { storage } from '../../libs/helper';
import { showApplyForm, showPartnerForm, apply, upload } from '../../controllers/information';

const router = Router();


router.get('/information/apply', showApplyForm);

router.get('/information/partner', showPartnerForm);

router.post('/information/apply', apply);

router.post('/upload', multer({ storage: storage }).any(), upload);

export default router;