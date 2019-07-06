import axios, { AxiosResponse } from 'axios'
import {
    IIssueError, 
    IIssueSuccess,
    IIssueFetch
} from '../../interfaces'
import { GITHUB_ACCESS_TOKEN, GITHUB_GRAPH_BASE_URL } from '../../utils/config'

async function issue(owner: string, repo: string, issueNumber: number, cursor?: string): Promise< IIssueError | IIssueSuccess | null> {
    try {
        const response: AxiosResponse<IIssueFetch> = await axios({
            method: 'POST',
            url: GITHUB_GRAPH_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${GITHUB_ACCESS_TOKEN}`
            },
            data: JSON.stringify({
                query: `
                    query {
                        repository(owner: "${owner}", name: "${repo}") {
                            issue(number: ${issueNumber}) {
                                title
                                createdAt
                                state
                                body
                                bodyHTML
                                author {
                                    login
                                }
                                comments(
                                    ${cursor && cursor !== '' ? 'after: ' + cursor : ''}
                                    first: 10
                                ) {
                                    totalCount
                                    pageInfo {
                                        endCursor
                                        startCursor
                                        hasNextPage
                                        hasPreviousPage
                                    }
                                    nodes {
                                        id
                                        createdAt
                                        author {
                                            login
                                        }
                                        body
                                        bodyHTML
                                    }   
                                }
                            }
                        }
                    }
                `
            })
        })

        if(response.status === 200) {
            const { data, errors } = response.data
            if(errors) {
                return {
                    error: {
                        type: errors[0].type,
                        message: errors[0].message
                    }
                }
            }
            else {
                return data.repository
            }
        }

        return null

    }
    catch(e) {
        console.log(e)
        return null
    }
}

// issue('facebook', 'react', 16059)
// .then(response => {
//     console.log(response)
// })

export {
    issue
}