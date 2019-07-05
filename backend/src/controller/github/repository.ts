import axios, { AxiosResponse } from 'axios'
import { 
    IRepositorySuccess, 
    IRepositoryError, 
    IRepositoryFetch
} from '../../interfaces'
import { GITHUB_ACCESS_TOKEN, GITHUB_GRAPH_BASE_URL } from '../../utils/config'

async function repository(owner: string, repo: string): Promise<IRepositorySuccess | IRepositoryError | any> {
    try {
        const response: AxiosResponse<IRepositoryFetch> = await axios({
            method: 'POST',
            url: GITHUB_GRAPH_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${GITHUB_ACCESS_TOKEN}`
            },
            data: JSON.stringify({
                query : `
                    query {
                        repository(owner: "${owner}", name: "${repo}") {
                            id
                            name
                            owner {
                                login
                            }
                            createdAt
                            totalIssues: issues {
                                totalCount
                            }
                            openIssues: issues(
                                states: OPEN
                            ) {
                                totalCount
                            }
                            closedIssues: issues(
                                states: CLOSED
                            ) {
                                totalCount
                            }
                            totalPullRequest: pullRequests {
                                totalCount
                            }
                            openPullRequest: pullRequests(
                                states: [OPEN]
                            ) {
                                totalCount
                            }
                            closedPullRequest: pullRequests(
                                states: [CLOSED]
                            ) {
                                totalCount
                            }
                        }
                    }
                `
            })
        })
        
        if(response.status === 200) {
            const { data, errors } = response.data
            if(errors) {
                // console.log(errors)
                return {
                    error: {
                        type: errors[0].type,
                        message: errors[0].message
                    }
                }
            }
            else {
                // console.log(data)
                return data
            }
        }
        // console.log({response})
    }
    catch(e) {
        console.log(e)
    }
}

// repository('facebook', 'react')
//     .then((response: IRepositorySuccess | IRepositoryError | any) => {
//         if(response.error) {
//             console.log(response.error)
//         }
//         else {
//             console.log(response.repository)
//         }
//     })
export {
    repository
}