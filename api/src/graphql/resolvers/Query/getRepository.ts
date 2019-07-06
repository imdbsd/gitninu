import axios, { AxiosResponse } from 'axios'

export function getRepository(obj: any, args: any, context: any, info: any) {
    return {
        "success": true,
        "repository": {
          "id": "MDEwOlJlcG9zaXRvcnkxNjY2NzA4NjI=",
          "name": "kaomoji",
          "owner": {
            "login": "imdbsd"
          },
          "createdAt": "2019-01-20T14:30:57Z",
          "totalIssues": {
            "totalCount": 0
          },
          "openIssues": {
            "totalCount": 0
          },
          "closedIssues": {
            "totalCount": 0
          },
          "totalPullRequest": {
            "totalCount": 1
          },
          "openPullRequest": {
            "totalCount": 0
          },
          "closedPullRequest": {
            "totalCount": 0
          },
          "mergedPullRequest": {
            "totalCount": 1
          }
        }
    }
}