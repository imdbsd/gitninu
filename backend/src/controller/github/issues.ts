import axios, { AxiosResponse } from 'axios'
import {
    IIssuesError,
    IIssuesFetch
} from '../../interfaces'
import { GITHUB_ACCESS_TOKEN, GITHUB_GRAPH_BASE_URL } from '../../utils/config'

async function issues() {
    try {
        const response: AxiosResponse<IIssuesFetch> = await axios({
            method: 'POST',
            url: GITHUB_GRAPH_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${GITHUB_ACCESS_TOKEN}`
            },
            data: JSON.stringify({
                query: `
                    query {
                        repository(owner: "facebaook", name: "react") {
                            issues(
                                first: 5
                                orderBy: {
                                    field: CREATED_AT
                                    direction: DESC
                                }
                            ) {
                                totalCount
                                edges {
                                    cursor
                                }
                                pageInfo {
                                    startCursor
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                }
                                nodes {
                                    id
                                    title
                                    createdAt
                                        author {
                                        login
                                    }
                                }
                            }
                        }
                    }
                `
            })
        })

        if(response.status === 200) {
            
        }

        return null
    }
    catch(e) {
        console.log(e)
    }
}

issues()

export {
    issues
}