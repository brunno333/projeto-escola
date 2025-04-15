import { Router } from 'express';
import userC from '../controllers/UserC';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//router.get('/', userC.index);
//router.get('/:id', userC.show);

router.post('/', loginRequired, userC.create);
router.put('/', loginRequired, userC.update);
router.delete('/', loginRequired, userC.delete);

export default router;
