import React from 'react'

function IssueDisplay(props) {
    const { owner, repo, number, issue } = props
    // console.log(issue.author.login)
    return(
        <section>
            <h1 className="issue__title">#{number} - {issue.title}</h1>
            <div>author: {issue.author ? issue.author.login : ''}</div>
            <div>created: {issue.createdAt ? issue.createdAt.split('T')[0] : ''}</div>
            <div>status: &nbsp;
                <span className={`tag ${issue.state === 'OPEN' ? 'is-danger' : 'is-primary'}`}>
                    {issue.state}
                </span>
            </div>
            <hr/>
            <div className="issue__body" dangerouslySetInnerHTML={{__html: issue.bodyHTML}}>
            </div>
        </section>
    )
}

export default IssueDisplay