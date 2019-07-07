import React from 'react'

function IssueCard(props) {
    const { issue } = props
    return (
        <article className="issue-card">
            <div className="issue-card__title">
                #{issue.number} {issue.title.substring(0, 15) + '...'}
            </div>
            <div className="issue-card__info">
                created by: {issue.author.login} | {issue.createdAt.split('T')[0]}
            </div>
            <div className="issue-card__state">
                <span className={`tag ${issue.state === 'OPEN' ? 'is-danger' : 'is-primary'}`}>
                    {issue.state}
                </span>
            </div>
        </article>
    )
}

export default IssueCard