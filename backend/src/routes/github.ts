import { Router } from 'express'
import { github } from '../controller'
import { 
    isInstanceOfIRepositorySuccess,
    isInstanceOfIIssuesSuccess,
    isInstanceOfIIssueSuccess
} from '../interfaces'
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

router.get('/repository/:owner/:repo/issues', async (req, res) => {
    try {
        const { owner, repo } = req.params
        const { cursor, direction = 'after', state } = req.query
        const repoIssuesRequest = await github.issues(owner, repo, 10, state, cursor, direction)
        if(repoIssuesRequest) {
            if(isInstanceOfIIssuesSuccess(repoIssuesRequest)) {
                res.status(200).json({
                    success: true,
                    issues: repoIssuesRequest.issues
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    error: repoIssuesRequest.error
                })
            }
        }
    }
    catch(e) {
        console.log(e)
        res.status(500).json({success: false})
    }
})

router.get('/repository/:owner/:repo/issue/:number', async (req, res) => {
    try {
        const { owner, repo, number } = req.params
        const { cursor, direction = 'after' } = req.query
        const repoIssueRequest = await github.issue(owner, repo, number, cursor, direction)
        if(repoIssueRequest) {
            if(isInstanceOfIIssueSuccess(repoIssueRequest)) {
                res.status(200).json({
                    success: true,
                    issue: repoIssueRequest.issue
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    error: repoIssueRequest.error
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