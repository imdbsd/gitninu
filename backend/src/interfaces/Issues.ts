export interface IIssuesSuccess {
    issues: {
        totalCount: number,
        edges: [
        {
            cursor: string
        }
        ],
        pageInfo: {
            startCursor: string,
            endCursor: string,
            hasNextPage: boolean,
            hasPreviousPage: boolean
        },
        nodes: [
            {
                id: string,
                title: string,
                createdAt: string,
                author: {
                login: string
                }
            }
        ]
    }
}

export interface IIssuesError {
    error: {
        type: string,
        message: string
    }
}

export interface IIssuesFetchError {
    path: any,
    locations: any,
    type: string,
    message: string
}

export interface IIssuesFetch {
    data: {
        repository: null
    } | {
        repository: {
            issues: IIssuesSuccess
        }
    },
    errors?: [IIssuesFetchError]
}