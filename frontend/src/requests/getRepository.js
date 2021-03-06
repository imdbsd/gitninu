async function getRepository(owner, repo) {
    try {
        const request = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query {
                        getRepository(
                          owner: "${owner}"
                          repo: "${repo}"
                        ) {
                          success
                          error {
                            type
                            message
                          }
                          repository {
                            id
                            name
                            owner {
                              login
                              avatarUrl
                            }
                            totalIssues {
                              totalCount
                            }
                            closedIssues {
                              totalCount
                            }
                            openIssues {
                              totalCount
                            }
                          }
                        }
                    }
                `
            })
        })
        const response = await request.json()
        console.log(response)
        return response.data.getRepository
    }
    catch(e) {
        console.log(e)
        console.log(e.response)
        return e
    }
}

// getRepository('facebook', 'react')

export default getRepository