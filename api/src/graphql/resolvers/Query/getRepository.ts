import axios, { AxiosResponse } from 'axios'
import {
    IGetRepositoryArgs,
    IGetRepositoryResp,
    IFetchRepositoryResponse
} from '../../../interfaces'

export async function getRepository(obj: any, args: IGetRepositoryArgs, context: any, info: any): Promise<IGetRepositoryResp | null> {
    try {
        const { repo, owner } = args
        const response: AxiosResponse<IFetchRepositoryResponse> = await axios({
            method: 'GET',
            url: `http://gitninu-be:3000/repository/${owner}/${repo}`
        })

        if(response.status === 200) {
            // console.log(response.data)
            return response.data
        }

        return null
    }
    catch(e) {
        // console.log(e.response.data)
        return e.response.data
    }
}

// getRepository({}, {owner: 'facebook', repo: 'react'}, {}, {})
// .then(response => {
//     console.log(response)
// })