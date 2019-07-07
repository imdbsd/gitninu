import React from 'react'

function Pagination(props) {
    const { totalElement, page, pageInfo, doPaginate } = props
    let pageTotal = parseInt(totalElement / 10) + 1 
    return (
        <div className="pagination">
            <div className="pagination__page-status">page: {page} / {pageTotal}</div>
            <div className="pagination__nav-wrapper">
                <button 
                    className="button" 
                    disabled={!pageInfo.hasPreviousPage}
                    onClick={() => doPaginate(pageInfo.startCursor, 'before')}
                >
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                <button 
                    className="button" 
                    disabled={!pageInfo.hasNextPage}
                    onClick={() => doPaginate(pageInfo.endCursor, 'after')}
                >
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default Pagination