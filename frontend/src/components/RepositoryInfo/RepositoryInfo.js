import React from 'react'

function RepositoryInfo(props) {
    const { info } = props
    return (
        <div>
            <div>
                <img src="https://avatars2.githubusercontent.com/u/16449020?v=4" />
            </div>
            <p>{info.owner.login}</p>
        </div>
    )
}

export default RepositoryInfo