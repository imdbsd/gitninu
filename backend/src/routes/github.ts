import { Router } from 'express'

const router: Router = Router()

router.get('/', (req, res) => res.status(200).json({'message': 'hello fellas'}))

router.get('/repository', (req, res) => {
    res.status(400).json({
        success: false,
        message: 'please specify owner and repo name'
    })
})

router.get('/repository/:owner', (req, res) => {
    res.status(400).json({
        success: false,
        message: 'please specify repo name'
    })
})

router.get('/repository/:owner/:repo', (req, res) => {
    console.log(req.params)
    res.status(200).json({
        success: true,
        message: 'uwu'
    })
})



export default router