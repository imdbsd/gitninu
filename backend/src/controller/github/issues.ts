import axios, { AxiosResponse } from 'axios'
import {
    IIssuesSuccess,
    IIssuesError,
    IIssuesFetch,
    isInstanceOfIIssuesSuccess
} from '../../interfaces'
import { GITHUB_ACCESS_TOKEN, GITHUB_GRAPH_BASE_URL } from '../../utils/config'

async function issues(owner: string, repo: string, count: number, cursor? : string): Promise<IIssuesSuccess | IIssuesError | null> {
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
                        repository(owner: "${owner}", name: "${repo}") {
                            issues(
                                ${cursor && cursor !== '' ? 'after: ' + cursor : ''}
                                first: ${count}
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
                                    number
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

issues('facebook', 'react', 10, 'Y3Vyc29yOnYyOpK5MjAxOS0wNy0wNFQwNjoyMjowOCswNzowMM4bp_Y9')
.then(response => {
    if(response && isInstanceOfIIssuesSuccess(response)) {
        console.log(response.issues)
    }
})

export {
    issues
}