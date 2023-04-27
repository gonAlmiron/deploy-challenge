import {Router} from 'express';
import dataRouter from './data.router';
import locationRouter from './geolocation.router'

const router = Router()

router.use('/data', dataRouter)
router.use('/location', locationRouter)

router.get('/', (req, res) => {
    res.json({
        message: 'Servidor ONLINE'
    })
})

export default router