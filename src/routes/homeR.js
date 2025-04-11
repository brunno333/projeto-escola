import { Router } from 'express';
import homeC from '../controllers/HomeC';
const router = new Router();

router.get('/', homeC.index);
export default router;
