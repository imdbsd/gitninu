import React from 'react'

function Pagination(props) {
    const { totalElement, page, pageInfo } = props
    let pageTotal = totalElement % 10
    if(pageTotal * 10 < totalElement) pageTotal++
    return (
        <div className="pagination">
            <div className="pagination__page-status">page: {page} / {pageTotal}</div>
            <div className="pagination__nav-wrapper">
                <button className="button" disabled={!pageInfo.hasPreviousPage}>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                <button className="button" disabled={!pageInfo.hasNextPage}>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default Pagination