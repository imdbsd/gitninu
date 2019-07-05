import { Router } from 'express'
import { github } from '../controller'
import { isInstanceOfIRepositorySuccess } from '../interfaces'
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

router.get('/repository/:owner/:repo', async (req, res) => {
    try {
        const { owner, repo } = req.params
        const repositoryRequest = await github.repository(owner, repo)
        if(repositoryRequest) {
            if(isInstanceOfIRepositorySuccess(repositoryRequest)) {
                res.status(200).json({
                    success: true,
                    repository: repositoryRequest.repository
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    error: repositoryRequest.error
                })
            }
        }
    }
    catch(e) {
        console.log(e)
        res.status(500).json({success: false})
    }
})



export default router