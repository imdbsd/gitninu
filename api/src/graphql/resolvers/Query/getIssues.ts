import axios, { AxiosResponse } from 'axios'
import {
    IGetIssuesResp,
    IFetchIssuesResponse,
    IGetIssuesArgs
} from '../../../interfaces'

async function getIssues(obj: any, args: IGetIssuesArgs, context: any, info: any): Promise<IGetIssuesResp | boolean> {
    try {
        const { repo, owner, cursor, direction = 'after', state } = args
        let url = `http://localhost:3000/repository/${owner}/${repo}/issues?`
        if(cursor && cursor !== '') {
            url += `cursor=${cursor}&direction=${direction}&`
        }
        if(state) {
            url += `state=${state}&`
        }
        const response: AxiosResponse<IFetchIssuesResponse> = await axios({
            method: 'GET',
            url
        })

        if(response.status === 200) {
            return response.data
        }

        return false
    }
    catch(e) {
        console.log(e.response.data)
        return false
    }
}

// getIssues({}, {owner: 'facebook', repo: 'react'}, {}, {})

export {
    getIssues
}