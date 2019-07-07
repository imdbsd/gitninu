export interface IGetIssueArgs {
    owner: string,
    repo: string,
    number: number
    commentCursor?: string,
    commentCursorDirection?: string
}

export interface IGetIssueResp {
    success: boolean,
    issue?: {
        id: string,
        title: string
        createdAt: string
        state: string
        body: string
        bodyHTML: string
        author: {
            login: string
        },
        comments: {
            totalCount: number,
            pageInfo: {
                endCursor: string
                startCursor: string
                hasNextPage: boolean
                hasPreviousPage: boolean
            },
            nodes: [
                {
                    id: string
                    createdAt: string
                    author: {
                        login: string
                    },
                    body: string
                    bodyHTML: string
                }
            ]
        }
    } | null,
    error?: {
        type: string,
        message: string
    }
}