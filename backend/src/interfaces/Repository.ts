export interface IRepositorySuccess {
    repository: {
        id: string,
        name: string,
        owner: {
          login: string,
          avatarUrl: string
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
        mergedPullRequest: {
          totalCount: number
        }
    }
}

export function isInstanceOfIRepositorySuccess(object: any): object is IRepositorySuccess {
  return object.repository ? true : false
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
    data: IRepositorySuccess | undefined,
    errors?: [IRepositoryFetchError]
}