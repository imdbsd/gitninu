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
                number: number,
                title: string,
                createdAt: string,
                author: {
                login: string
                }
            }
        ]
    } | null
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
        repository: IIssuesSuccess
    },
    errors?: [IIssuesFetchError]
}

export function isInstanceOfIIssuesSuccess(object: any): object is IIssuesSuccess {
    return object.issues ? true : false
}