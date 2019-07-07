import React from 'react'

function RepositoryInfo(props) {
    const { info } = props
    return (
        <section className="repo-info">
            <div className="repo-info__avatar">
                <img src="https://avatars2.githubusercontent.com/u/16449020?v=4" />
            </div>
            <h1 className="repo-info__name">{info.name}</h1>
            <p className="repo-info__owner">by {info.owner.login}</p>
            <p className="repo-info__total-issues">Total Issues: <span className="has-text-info">{info.totalIssues.totalCount}</span></p>
        </section>
    )
}

export default RepositoryInfo