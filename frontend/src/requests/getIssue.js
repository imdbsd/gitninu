async function getIssue(owner, repo, number, cursor, direction) {
    try {
        const request = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query {
                        getIssue(
                          owner: "${owner}"
                          repo: "${repo}"
                          number: ${number}
                        ) {
                          success
                          error {
                            type
                          }
                          issue {
                            id
                            title
                            body
                            bodyHTML
                            author {
                              login
                            }
                            comments {
                              totalCount
                              pageInfo {
                                startCursor
                                endCursor
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
        const response = await request.json()
        // console.log(response)
        return response.data.getIssue
    }
    catch(e) {
        console.log(e)
        return false
    }
}

export default getIssue