import axios, { AxiosResponse } from 'axios'
import { IGetIssueArgs, IGetIssueResp } from '../../../interfaces'

async function getIssue(obj: any, args: IGetIssueArgs, context: any, info: any): Promise<IGetIssueResp | boolean> {
    try {
        const { owner, repo, number, commentCursor, commentCursorDirection } = args
        let url = `http://localhost:3000/repository/${owner}/${repo}/issue/${number}`
        if(commentCursor && commentCursor !== '') {
            url += `?cursor=${commentCursor}&direction=${commentCursorDirection}`
        }
        const response: AxiosResponse<IGetIssueResp> = await axios({
            method: 'GET',
            url
        })
        console.log(response.data)
        if(response.status === 200) {
            return response.data
        }

        return false
    }   
    catch(e) {
        console.log(e)
        return false
    }
}

getIssue({}, {
    owner: 'facebook',
    repo: 'react',
    number: 10
}, {}, {})

export {
    getIssue
}