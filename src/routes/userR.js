import { Router } from 'express';
import userC from '../controllers/UserC';
const router = new Router();

router.post('/', userC.create);
router.get('/', userC.index);
router.get('/:id', userC.show);
router.put('/:id', userC.update);
router.delete('/:id', userC.delete);

export default router;
