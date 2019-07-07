import React from 'react'

function IssueDisplay(props) {
    const { owner, repo, number, issue } = props
    return(
        <section>
            <h1 className="">#{number} - {issue.title}</h1>
        </section>
    )
}

export default IssueDisplay