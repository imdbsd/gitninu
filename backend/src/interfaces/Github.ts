export interface IRepositorySuccess {
    repository: {
        id: string,
        name: string,
        owner: {
          login: string
        },
        createdAt: string,
        totalIssues: {
          totalCount: number
        },
        openIssues: {
          totalCount: number
        },
        closedIssues: {
          totalCount: number
        },
        totalPullRequest: {
          totalCount: number
        },
        openPullRequest: {
          totalCount: number
        },
        closedPullRequest: {
          totalCount: number
        }
    }
}

export interface IRepositoryError {
    error: {
        type: string,
        message: string
    }
}

export interface IRepositoryFetchError {
    path: any,
    locations: any,
    type: string,
    message: string
}

export interface IRepositoryFetch {
    data: IRepositorySuccess | null,
    errors?: [IRepositoryFetchError]
}