import {Router} from 'express';
import dataRouter from './data.router';
import locationRouter from './geolocation.router'

const router = Router()

router.use('/data', dataRouter)
router.use('/location', locationRouter)

export default router