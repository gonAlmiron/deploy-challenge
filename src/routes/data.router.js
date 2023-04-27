import {Router} from 'express';
import {getDataController} from '../controllers/data.controller';

const router = Router();

router.get('/', getDataController);

export default router