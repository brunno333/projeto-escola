import { Router } from 'express';
import userC from '../controllers/UserC';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userC.create);
router.get('/', loginRequired, userC.index);
router.get('/:id', userC.show);
router.put('/:id', userC.update);
router.delete('/:id', userC.delete);

export default router;
