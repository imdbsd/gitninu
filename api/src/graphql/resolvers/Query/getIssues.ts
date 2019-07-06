import axios, { AxiosResponse } from 'axios'
import { getRepository } from './getRepository'
import {
    IGetRepositoryResp,
    IFetchIssuesResponse,
    IGetIssuesArgs
} from '../../../interfaces'

export async function getIssues(obj: any, args: IGetIssuesArgs, context: any, info: any): Promise<null> {
    try {
        const { repo, owner, cursor } = args
        const response: AxiosResponse<IFetchIssuesResponse> = await axios({
            method: 'GET',
            url: `http://localhost:3000/repository/${owner}/${repo}/issues`
        })

        if(response.status === 200) {
            if(response.data.issues) {
                console.log(response.data)
                return null
            }
            return null
        }

        return null
    }
    catch(e) {
        console.log(e.response.data)
        return null
    }
}

getIssues({}, {owner: 'facebook', repo: 'react'}, {}, {})