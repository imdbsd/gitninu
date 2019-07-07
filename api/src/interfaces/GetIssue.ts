export interface IGetIssueArgs {
    owner: string,
    repo: string,
    number: number
    commentCursor: string,
    commentCursorDirection: string
}