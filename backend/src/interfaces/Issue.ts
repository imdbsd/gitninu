export interface IIssueSuccess {
    issue: {
        title: string
        createdAt: string
        state: string
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
    } | null
}

export interface IIssueError {
    error: {
        type: string,
        message: string
    }
}

export interface IIssueFetchError {
    path: any,
    locations: any,
    type: string,
    message: string
}

export interface IIssueFetch {
    data: {
        repository: IIssueSuccess
    },
    errors?: [IIssueFetchError]
}

export function isInstanceOfIIssueSuccess(object: any): object is IIssueSuccess {
    return object.issue ? true : false
}