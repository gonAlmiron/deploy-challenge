import {Router} from 'express';
import { geoLocationController } from '../controllers/geolocation.controller';

const router = Router()

router.use('/', geoLocationController)

export default router