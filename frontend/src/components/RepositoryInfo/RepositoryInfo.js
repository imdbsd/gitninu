import React from 'react'

function RepositoryInfo(props) {
    const { info } = props
    return (
        <section className="repo-info">
            <div className="repo-info__avatar">
                <img src={info.owner.avatarUrl} alt={info.owner.login}/>
            </div>
            <h1 className="repo-info__name">{info.name}</h1>
            <p className="repo-info__owner">by {info.owner.login}</p>
            <p className="repo-info__total-issues">Total Issues: <span className="has-text-info">{info.totalIssues.totalCount}</span></p>
            <p className="repo-info__issue"><span className="has-text-danger">{info.closedIssues.totalCount}</span> open | <span className="has-text-primary">{info.openIssues.totalCount}</span> closed</p>
        </section>
    )
}

export default RepositoryInfo