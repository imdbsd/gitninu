export interface IGetRepositoryArgs {
    owner: string,
    repo: string
}

export interface IGetRepositoryResp extends IFetchRepositoryResponse{
    
}

export interface IFetchRepositoryResponse {
    success: boolean,
    error?: {
        type: string,
        message: string
    },
    repository?: {
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
        },
        mergedPullRequest: {
            totalCount: number
        },
        issues: {
            
        }
    }
}