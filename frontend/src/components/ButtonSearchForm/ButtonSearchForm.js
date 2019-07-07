import React from 'react'

function ButtonSearchForm(props) {
    if(props.isShow) {
        return (
            <button className="button button-search is-primary" onClick={() => props.handleOpenSearchForm(true)}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        )
    }
    return null
}

export default ButtonSearchForm