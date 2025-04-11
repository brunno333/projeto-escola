import { Router } from 'express';
import alunoC from '../controllers/AlunoC';
const router = new Router();

router.get('/', alunoC.index);
router.delete('/:id', alunoC.delete);
export default router;
