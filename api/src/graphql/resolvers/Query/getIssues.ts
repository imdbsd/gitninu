import axios, { AxiosResponse } from 'axios'
import { getRepository } from './getRepository'
import {
    IGetIssuesResp,
    IFetchIssuesResponse,
    IGetIssuesArgs
} from '../../../interfaces'

export async function getIssues(obj: any, args: IGetIssuesArgs, context: any, info: any): Promise<IGetIssuesResp | boolean> {
    try {
        const { repo, owner, cursor } = args
        let url = `http://localhost:3000/repository/${owner}/${repo}/issues`
        if(cursor && cursor !== '') {
            url += `?cursor=${cursor}`
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

getIssues({}, {owner: 'facebook', repo: 'react', cursor: 'Y3Vyc29yOnYyOpK5MjAxOS0wNy0wNFQwOTo1MzoyMSswNzowMM4bqJyW'}, {}, {})