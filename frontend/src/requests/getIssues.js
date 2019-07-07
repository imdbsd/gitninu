async function getIssues(owner, repo, cursor, direction) {
    try {
        const request = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query {
                        getIssues(
                          owner: "${owner}"
                          repo: "${repo}"
                          ${cursor && cursor !== '' ? 'cursor: "' + cursor + '"': ''}
                          ${direction && direction !== '' ? 'direction: ' + direction : ''}
                        ) {
                          success
                          error {
                            type
                            message
                          }
                          issues {
                            totalCount
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
                              author {
                                login
                              }
                              createdAt
                              state
                            }
                          }
                        }
                    }
                `
            })
        })
        const response = await request.json()
        // console.log(response)
        return response.data.getIssues
    }
    catch(e) {
        console.log(e)
        return false
    }
}

export default getIssues