import React from 'react'

function IssueCard(props) {
    return (
        <article className="issue-card">
            <div className="issue-card__title">
                #1 lorem ipsum
            </div>
            <div className="issue-card__info">
                created by: asdqwe | 22-03-2019
            </div>
            <div className="issue-card__state">
                <span className="tag is-primary">
                Closed
                </span>
            </div>
        </article>
    )
}

export default IssueCard