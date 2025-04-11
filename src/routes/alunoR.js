import { Router } from 'express';
import alunoC from '../controllers/AlunoC';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoC.index);
router.post('/', loginRequired, alunoC.create);
router.put('/:id', loginRequired, alunoC.update);
router.get('/:id', alunoC.show);
router.delete('/:id', loginRequired, alunoC.delete);
export default router;
