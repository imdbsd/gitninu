import { Router } from 'express'

const router: Router = Router()

router.get('/', (req, res) => res.status(200).json({'message': 'hello fellas'}))

export default router