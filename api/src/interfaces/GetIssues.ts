import { IGetRepositoryArgs } from './GetRepository'

export interface IGetIssuesArgs extends IGetRepositoryArgs {
    cursor?: string
}

export interface IFetchIssuesResponse {
    success: boolean,
    issues?: {
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
          number: number,
          createdAt: string,
          author: {
            login: string
          }
        }
      ]
    },
    error? : {
        type: string,
        message: string
    }
}